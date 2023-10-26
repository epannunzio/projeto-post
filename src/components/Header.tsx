import styles from './Header.module.css';
import logoIgnite from '../assets/logo-ignite.svg';

console.log(logoIgnite);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logotipo" />
    </header>
  ); 
}

//componentes react tem a primeira letra maiuscula, diferente das tags html
//no react usamos classes CSS como className uma vez que tbm usaremos o class do JS e assim não se confunde