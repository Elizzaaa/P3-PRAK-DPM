import React from 'react';

const Post = ({ username, content, imageUrl }) => {
  console.log(username, content, imageUrl); // Debugging log
  return (
    <div className="post">
      <div className="post-header">
        <h3>{username}</h3>
      </div>
      {/* Menampilkan gambar */}
      <img src={imageUrl} alt="Post" className="post-image" />
      <p>{content}</p>
      <div className="post-footer">
        <button>Like</button>
        <button>Comment</button>
      </div>
    </div>
  );
};

export default Post;
