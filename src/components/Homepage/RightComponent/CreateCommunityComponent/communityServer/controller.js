import pool from "../../../../../../db.js";

const getSubReddit = (req, res) => {
  pool.query("SELECT * FROM subreddits", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export default { getSubReddit };
