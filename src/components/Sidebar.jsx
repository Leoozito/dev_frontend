import styles from './Sidebar.module.css';
import { Code } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover}
             src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/Leoozito.png"/>
                <strong>Leonardo Nogueira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <Code size={20}/>
                    Meu perfil
                </a>
            </footer>
        </aside>
    );
}