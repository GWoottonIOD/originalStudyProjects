const sql = require("./db.js");

// constructor
const Blog_comments = function(comment) {
  this.user_id = comment.user_id;
  this.post_id = comment.post_id;
  this.comment = comment.comment;
};

Blog_comments.create = (newComment, result) => {
  sql.query("INSERT INTO comments SET ?", newComment, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created comment: ", { id: res.insertId, ...newComment });
    result(null, { id: res.insertId, ...newComment });
  });
};

Blog_comments.getAll = (title, result) => {
  let query = "SELECT * FROM comments";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("comments: ", res);
    result(null, res);
  });
};

Blog_comments.getOne = (id, result) => {
  let query = "SELECT * FROM comments";

  if (id) {
    query += ` WHERE id = ${id}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("comments: ", res);
    result(null, res);
  });
};

Blog_comments.updateOne = (id, newUser_id, newPost_id, newComment, result) => {
  let query = "update comments set";

  let comma = false
  if (newUser_id) {
    query += ` user_id=${newUser_id}`;
    comma=true 
  }
  if (newPost_id) {
    query += (comma?', ' : ' ')+`post_id=${newPost_id}`;
    comma=true 
  }
  if (newComment){
    query += (comma?', ' : ' ')+`comment='${newComment}'`;
  }
  query += ` WHERE id=${id}`

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("comments: ", res);
    result(null, res);
  });
};

Blog_comments.deleteOne = (id,result) => {
  let query = "DELETE FROM comments";

  if (id) {
    query += ` WHERE id = ${id}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("comments: ", res);
    result(null, res);
  });
};

Blog_comments.deleteAll = (result) => {
  let query = "DELETE FROM comments";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("comments: ", res);
    result(null, res);
  });
};

module.exports = Blog_comments;