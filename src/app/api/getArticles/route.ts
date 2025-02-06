import { NextResponse } from 'next/server';
import { Pool } from 'pg';
type ArticlesData = {
 header: string,
 images_path: string,
 description: string,
 file_data: string,
 todo_id: number,
 time: string,
 date: string,
};
// Настройки за връзка с PostgreSQL
const pool = new Pool({
 user: 'mitaka',
 password: 'mitaka',
 host: '192.168.55.5',
 port: 5434, // work
 database: 'postgres',
});
export async function GET() {
 try {
  // Query to fetch all articles
  const result = await pool.query('SELECT * FROM articles');
  const articles = result.rows;
  // Return the fetched articles as JSON
  return NextResponse.json(articles);
 } catch (error) {
  console.log('Error fetching articles:', error);
  return NextResponse.json({ error: 'Failed to fetch data' });
 }
}

