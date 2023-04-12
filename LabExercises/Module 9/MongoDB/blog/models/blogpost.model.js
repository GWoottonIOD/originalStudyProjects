module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        image: String,
        user_id: Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const blogPost = mongoose.model("blogPost", schema);
    return blogPost;
  };
  