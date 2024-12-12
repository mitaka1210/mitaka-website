import {NextResponse} from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: "mitaka",
  password: "mitaka",
  host: "192.168.55.5",
  // port: 6543,// home
  port: 5434, // work
  database: "postgres",
});

export default pool;
export async function GET() {
  console.log('pesho 12312312',)
  // изчакваме req.json() да се изпълни и да ни върне body
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM articles');
    console.log('pesho', result.rows);
    let articles: any = result.rows;
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({error: 'Failed to fetch data  '});
  }

}

