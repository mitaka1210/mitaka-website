import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/database/db';
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const userResult = await
         pool.query('SELECT id, name, email FROM googlelogin WHERE' +
             ' name = $1', [username]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const user = userResult.rows[0];
        // 🔹 Вмъкване на `name`, `email` и `login_date` в таблицата
        // `googlelogin`
        await pool.query('INSERT INTO googlelogin (name, email, login_date)' +
            ' VALUES ($1, $2, CURRENT_TIMESTAMP)', [
            user.name,
            user.email,
        ]);

        res.json({ user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
