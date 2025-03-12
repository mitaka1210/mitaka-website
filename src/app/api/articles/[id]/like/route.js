import pool  from "../../../../../database/db";
import {NextRequest, NextResponse} from "next/server"; // Файлът db.js съдържа връзката с PostgreSQL


// TODO when add user login need this post request for connect user_id and article_id in article_likes table
//TODO когато добавя и логина да мога да обвържа статията с логнатия потребител и харесванията и не харестанията

// export default async function handler(req:any, res:any) {
//     const { id } = req.query;
//     const { user_id, is_like } = req.body;
//
//     if (req.method === "POST") {
//         try {
//             // Проверяваме дали user вече е гласувал
//             const existing = await pool.query(
//                 "SELECT * FROM article_likes WHERE article_id = $1 AND user_id = $2",
//                 [id, user_id]
//             );
//
//             if (existing.rows.length > 0) {
//                 // Update на съществуващия запис
//                 await pool.query(
//                     "UPDATE article_likes SET is_like = $1 WHERE article_id = $2 AND user_id = $3",
//                     [is_like, id, user_id]
//                 );
//             } else {
//                 // Добавяне на нов запис
//                 await pool.query(
//                     "INSERT INTO article_likes (article_id, user_id, is_like) VALUES ($1, $2, $3)",
//                     [id, user_id, is_like]
//                 );
//             }
//
//             res.json({ success: true });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: "Server error" });
//         }
//     } else {
//         res.status(405).json({ error: "Method not allowed" });
//     }
// }
/**
 * Handles the HTTP request for liking or disliking an article.
 *
 * @param {NextRequest} req - The HTTP request object.
 * @param {NextResponse} res - The HTTP response object.
 *
 * The request should contain:
 * - `id` in the query parameters, representing the article ID.
 * - `isLike` in the request body, a boolean indicating whether the action is a like (true) or dislike (false).
 *
 * The function updates the `likes` or `dislikes` count of the specified article in the database.
 * It responds with a JSON object indicating success or an error message.
 */



export async function POST(req, { params }) {
    console.log("🔹 ID from params:", params.id);
    const id = params.id; // ✅ Взимаме ID от URL параметрите правилно

    try {
        const { isLike } = await req.json(); // ✅ Четем тялото на заявката
        console.log("🔹 isLike:", isLike);

        if (typeof isLike !== "boolean") {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        const query = isLike
            ? "UPDATE article_likes SET likes = likes + 1 WHERE id = $1"
            : "UPDATE article_likes SET dislikes = dislikes + 1 WHERE id = $1";

        await pool.query(query, [id]);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("🔴 Database error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
