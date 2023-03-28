import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {/* para receber propridades */
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} /* no caso: SE a propriedade tiver borda, ativa o styles com bordar, SE NÃO , coloca styles normal*/
            src={src}
        />
    )
}