module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        user_id: Number,
        post_id: Number,
        comment: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const blogComment = mongoose.model("blogComment", schema);
    return blogComment;
  };
  