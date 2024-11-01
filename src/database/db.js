import pg from "pg";

const {Pool} = pg;
const pool = new Pool({
  user: "mitaka",
  password: "mitaka",
  host: "192.168.55.47",
  // port: 6543,// home
  port: 5433,  // work
  database: "postgres"
});

export default pool;
// Compare this snippet from server/index.js:
