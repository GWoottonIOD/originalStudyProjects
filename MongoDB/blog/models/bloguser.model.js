module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      f_name: String,
      l_name: String,
      user_name: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const blogUser = mongoose.model("blogUser", schema);
  return blogUser;
};
