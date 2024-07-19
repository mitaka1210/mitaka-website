import pool from "@/database/db";
import {NextResponse} from "next/server";

type ArticlesData = {
  header: string,
  images_path: string,
  description: string,
  file_data: string,
  todo_id: number,
  time: string,
  date: string,
};

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM article');
    let articles: ArticlesData = result.rows;
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({error: 'Failed to fetch data  '});
  }

}

