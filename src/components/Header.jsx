import styles from './Header.module.css'
import meuLogo from '../assets/meu_logo.txt'

export function Header() {
    return(
        <header className={styles.header}>
            <strong>Programmer Full-Stack</strong>
        </header>
    );
}