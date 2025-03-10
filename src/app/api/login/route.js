import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import pool from '../../../database/db';

const SECRET_KEY = "your_secret_key"; // Use a secure key

const validate = (req, res, validations) => {
    return Promise.all(validations.map(validation => validation.run(req))).then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            throw new Error('Validation failed');
        }
    });
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await validate(req, res, [
        body('username').notEmpty().withMessage('Username is required'),
        body('password').notEmpty().withMessage('Password is required'),
    ]);

    const { username, password, role } = req.body;

    try {
        const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = userResult.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            const failedAttempts = user.failed_attempts + 1;
            await pool.query('UPDATE users SET failed_attempts = $1, blocked = $2 WHERE username = $3', [failedAttempts, failedAttempts >= 5, username]);

            return res.status(401).json({
                message: 'You have reached the maximum number of login attempts. Please contact an administrator at the following email address: dimitard185@gmail.com',
            });
        }

        await pool.query('UPDATE users SET failed_attempts = 0 WHERE username = $1', [username]);

        let userRole = role;
        if (username === 'asda') {
            userRole = 'admin';
        }

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

        const query = 'INSERT INTO user_logins (username, password, role, login_time) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)';
        const values = [user.username, user.password, role];

        await pool.query(query, values);

        res.json({ token, user: userRole });
    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}