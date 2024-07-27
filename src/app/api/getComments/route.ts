import pool from "@/database/db";

import {NextRequest, NextResponse} from "next/server";

type CommentsData = {

    comments: string
    created_at: string
    email: string
    id: number
    name: string
    time: string
};

export async function GET(req: NextRequest, res: any) {
    const id = req.nextUrl.searchParams.get('id');
    try {
        const client = await pool.connect();
        const result: CommentsData = await client.query('SELECT * FROM comments WHERE id = $1', [id]);
        let articles = result.rows;
        return NextResponse.json(articles);
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch data  ', errorMsg: error});
    }

}

