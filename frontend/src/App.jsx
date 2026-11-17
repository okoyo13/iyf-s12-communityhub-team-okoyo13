import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import { createPost } from './utils/postUtils'
import './App.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to CommunityHub',
      content: 'This is our first community post.',
      author: 'CommunityHub Team'
    }
  ])

  function handleAddPost(postDetails) {
    const newPost = createPost(
      postDetails.title,
      postDetails.content,
      'Taura James'
    )

    setPosts((currentPosts) => [newPost, ...currentPosts])
  }

  return (
    <>
      <Header />

      <div className="app-layout">
        <Sidebar />

        <main>
          <CreatePost onAddPost={handleAddPost} />
          <PostList posts={posts} />
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App