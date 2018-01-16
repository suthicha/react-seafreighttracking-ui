import React from 'react'
import Isvg from 'react-inlinesvg'
import cloudboltItem from '../../icons/cloudbolt.svg'
import styles from './LoadingBolt.scss'


const LoadingBolt = () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Isvg className={styles.bolt} src={cloudboltItem} />
            <h1>loading</h1>
        </div>
    </div>
)

export default LoadingBolt;