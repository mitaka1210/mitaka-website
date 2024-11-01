import pool from "../../../database/db";
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

// export async function GET() {
//   console.log('pesho123123');
//   // изчакваме req.json() да се изпълни и да ни върне body
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM article');
//     console.log('pesho in', result);
//     let articles: ArticlesData = result.rows;
//     console.log('pesho', articles);
//     return NextResponse.json(articles);
//   } catch (error) {
//     return NextResponse.json({error: 'Failed to fetch data  '});
//   }
//
// }

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM article'); // Заменете със съответната ви SQL заявка
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}