import pool from "../../../database/db";

export default async (req, res) => {
  const {id} = req.query;
  console.log("pesho", id);

  if (req.method === "GET") {
    try {
      // Връзка към базата данни и изпълнение на заявката
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM articles WHERE id = $1", [id]);

      console.log("pesho", result);
      client.release();

      if (result.rows.length === 0) {
        res.status(404).json({message: "Property not found"});
      } else {
        res.status(200).json(result.rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({message: "Internal Server Error"});
    }
  } else {
    res.status(405).json({message: "Method Not Allowed"});
  }
};

