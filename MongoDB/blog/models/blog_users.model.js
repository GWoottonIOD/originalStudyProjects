const sql = require("./db.js");

// constructor
const Blog_users = function(blog_users) {
  this.f_name = blog_users.f_name;
  this.l_name = blog_users.l_name;
  this.user_name = blog_users.user_name;
};

Blog_users.create = (newBlogUser, result) => {
  sql.query("INSERT INTO users SET ?", newBlogUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newBlogUser });
    result(null, { id: res.insertId, ...newBlogUser });
  });
};

Blog_users.getAll = (title, result) => {
  let query = "SELECT * FROM users";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

Blog_users.getOne = (id, result) => {
  let query = "SELECT * FROM users";

  if (id) {
    query += ` WHERE id = ${id}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

Blog_users.updateOne = (id, newF_name, newL_name, newUser_name, result) => {
  let query = "update users set";

  let comma = false
  if (newF_name) {
    query += ` f_name='${newF_name}'`;
    comma=true 
  }
  if (newL_name) {
    query += (comma?', ' : ' ')+`l_name='${newL_name}'`;
    comma=true 
  }
  if (newUser_name){
    query += (comma?', ' : ' ')+`user_name='${newUser_name}'`;
  }
  
  query +=  ` WHERE id=${id}`

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

Blog_users.deleteOne = (id,result) => {
  let query = "DELETE FROM users";

  if (id) {
    query += ` WHERE id = ${id}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

Blog_users.deleteAll = (result) => {
  let query = "DELETE FROM users";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

module.exports = Blog_users;