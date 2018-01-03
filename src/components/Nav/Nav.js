import React from 'react'
import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'
import styles from './Nav.scss'

const Nav = () => { 
    <nav className={styles.nav}>
        <header className={styles.header}>
            <h1>ProjectName</h1>
            <span>Beta</span>
        </header>
    </nav>
}

export default Nav