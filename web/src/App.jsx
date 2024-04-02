import MembersYouMayKnow from "./components/MembersYouMayKnow";
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import SharePost from "./components/SharePost"
import posts from "./data/posts"

function App() {

  return (
    <div className="bg-purple-100 h-max">
      <Navbar/>
      <div className="flex flex-col items-center justify-center">
        <SharePost/>
        <PostCard post={posts[0]}/>
        <MembersYouMayKnow/>
        <PostCard post={posts[1]}/>
        <PostCard post={posts[2]}/>
        <PostCard post={posts[3]}/>
        <PostCard post={posts[4]}/>
        <PostCard post={posts[5]}/>
      </div>
    </div>
  )
}

export default App
