import pool from "../../../../../../db.js";
import queries from "./queries.js";

const getSubReddit = (req, res) => {
  pool.query(queries.getSubReddits, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getSubRedditByName = (req, res) => {
  const name = req.params.name;
  pool.query(queries.getSubRedditByName, [name], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
export default { getSubReddit, getSubRedditByName };
