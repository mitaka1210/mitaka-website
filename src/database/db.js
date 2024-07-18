import {Pool} from "pg";

const pool = new Pool({
  user: "mitaka",
  password: "mitaka",
  host: "192.168.55.5",
  // port: 6543,// home
  port: 5432,  // work
  database: "postgres"
});

export default pool;
// Compare this snippet from server/index.js:
