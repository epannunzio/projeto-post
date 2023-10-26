import { Post, PostType} from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/epannunzio.png',
      name: 'Edilza Pannunzio',
      role: 'Dev Front-End Jr'
    },
    content: [ 
    { type: 'paragraph', content: 'Fala galeraa 👋', },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: '👉 epannunzio/projeto-post' },
    ],
    publishedAt: new Date('2023-10-10 10:20:00')
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [ 
    { type: 'paragraph', content: 'Eaeee 👋', },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
    { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-10-10 11:17:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => { //aqui usamos map do JS no lugar de forEach para que retorne algo que desejamos enquanto o forEach retorna void
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

//componente react é uma função que retorna html
//todos os componentes precisam ter extensão jsx, que é um arquivo javascript que contém html nele
//usamos o nome do componente entre chaves quando o export estiver antes de function (named exports) 