const getSubReddits = "SELECT * FROM subreddits";
const getSubRedditByName = "SELECT * FROM subreddits WHERE name = $1";

export default { getSubReddits, getSubRedditByName };
