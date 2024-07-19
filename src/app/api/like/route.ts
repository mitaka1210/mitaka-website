import pool from "@/database/db";
import {NextResponse} from "next/server";
import {transferTodosToArticles} from "@/app/Helper-components/checkTablesInDB/comapreTablesInDB";

export async function POST(req: { body: { likes: number; todoId: number; }; }, res: any) {
  const {likes, todoId} = req.body;
  console.log('pesho', likes, todoId);
  try {
    await transferTodosToArticles();
    const client = await pool.connect();
    const result = await client.query("UPDATE articles SET likes = $1 + 1 WHERE id = $2", [likes, todoId]);
    res.status(200).send("Liked");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({error: "Server error"});
  }

}

