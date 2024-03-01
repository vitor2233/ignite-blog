import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/45835780?v=4',
      name: 'Vitor Guilherme',
      role: 'Backend Develper'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-02-02 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/45835780?v=4',
      name: 'Vitor Moreira',
      role: 'Frontend Develper'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-02-22 20:00:00')
  }
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
