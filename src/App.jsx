import { Post } from "./Post"
import { Header } from "./components/Header"
import "./global.css"

export function App() {

  return (
    <div>
      <Header />
      <Post
        author="Vitor"
        content="Vitor Guilherme"
      />
      <Post />
      <Post />
    </div>
  )
}
