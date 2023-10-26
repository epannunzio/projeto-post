import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) { //usando ({ content }) podemos remover da tag p o props, deixando só o content, pois desestruturamos
  const [likeCount, setLikeCount] = useState(0); //sempre colocar dentro do useState um valor que tenha a ver com a lógica, nesse caso não pode ser string vazia, precisa ser o zero
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }
  
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://github.com/epannunzio.png'
        alt='' 
        onClick={() => alert('Fala ae')}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Edilza Rodrigues</strong>
              <time title='02 de Outubro de 2023' dateTime='2023-10-02 10:40:00'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span> 
          </button>
        </footer>
      </div>
    </div>
  )
}

//quando estiver dando erros aleatorios podemos dar ctrl shift p e selecionar restart TS server ou reload window