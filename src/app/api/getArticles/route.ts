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
  // Правим заявка към API-то на вашия сървър
  const response = await fetch('http://192.168.55.5:5000/articles');

  if (!response.ok) {
   throw new Error('Failed to fetch data from external API');
  }

  // Парсираме отговора като JSON
  const articles = await response.json();
  console.log('pesho', articles);
  // Връщаме получените данни
  return NextResponse.json(articles);
 } catch (error) {
  console.error('Error fetching articles:', error);
  return NextResponse.json({ error: 'Failed to fetch data' });
 }
}

