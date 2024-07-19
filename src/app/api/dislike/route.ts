import pool from "@/database/db";
import {NextResponse} from "next/server";
import {transferTodosToArticles} from "@/app/Helper-components/checkTablesInDB/comapreTablesInDB";

export async function POST(req: { body: { dislikes: number; todoId: number; }; }, res: any) {
  const {dislikes, todoId} = req.body;
  try {
    await transferTodosToArticles();
    const client = await pool.connect();
    const result = await client.query("UPDATE articles SET dislikes = $1 + 1 WHERE id = $2", [dislikes, todoId]);
    res.status(200).send("Disliked");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({error: "Server error"});
  }

}

