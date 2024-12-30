import React from 'react';
import Post from './components/Post'; // Pastikan path ini benar

const App = () => {
  return (
    <div className="app">
      <Post
        username="ElizzaHarp"
        content="soooo... happy"
        imageUrl="/images/image1.jpg" // Menyediakan URL gambar
      />
      <Post
        username="Elxpiu"
        content="runn runn"
        imageUrl="/images/image2.jpg" // Menyediakan URL gambar
      />
    </div>
  );
};

export default App;
