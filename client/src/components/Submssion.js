import React from 'react'
import styles from './Submission.module.css'

const Submission = ({ submission }) => {
    return (
        <li style={{ listStyle: 'none' }}>
            <a href={submission.url}>
                <div className={styles.submission}>{submission.teaser}</div>
            </a>
        </li>
    )
}

export default Submission
