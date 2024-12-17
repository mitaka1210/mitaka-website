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
 // изчакваме req.json() да се изпълни и да ни върне body
 try {
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM articles');
  let articles: ArticlesData[] = result.rows;
  return NextResponse.json(articles);
 } catch (error) {
  return NextResponse.json({ error: 'Failed to fetch data  ' });
 }

}

