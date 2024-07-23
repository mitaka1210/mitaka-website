import pool from "@/database/db";

import {NextResponse, NextRequest} from "next/server";

type LikeDislike = {
  likes: number,
  dislikes: number,
  id: number,
};

export async function GET(req: NextRequest, res:any) {

  const id = req.nextUrl.searchParams.get('id');

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM articles WHERE id = $1', [id]);
    console.log(result.rows);

    let articles: LikeDislike = result.rows;
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({error: 'Failed to fetch data  '});
  }

}

