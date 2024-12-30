import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Post from '../components/tugas3/src/components/Post.js';


const HomePage = () => {
  const [posts, setPosts] = useState([]);

  // Lifecycle method using useEffect to simulate componentDidMount
  useEffect(() => {
    // Simulasi fetching data
    const fetchedPosts = [
      { id: 1, username: 'Elizza', content: 'This is a beautiful day!', imageUrl: 'https://via.placeholder.com/600x300' },
      { id: 2, username: 'jane_doe', content: 'Enjoying the sunset', imageUrl: 'https://via.placeholder.com/600x300' },
    ];
    setPosts(fetchedPosts);
  
    document.title = 'Instagram - Home';
  }, []);
  
  return (
    <div className="home-page">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="posts">
          {posts.map(post => (
            <Post key={post.id} username={post.username} content={post.content} imageUrl={post.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
