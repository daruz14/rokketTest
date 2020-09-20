import styles from '../styles/Home.module.css'

const BasicView = ({ text, viewType }) => {
    return (
        <div key={`post-${viewType}`} className={styles.card}>
            <h4>{text}</h4>
        </div>
    )
}

export default BasicView