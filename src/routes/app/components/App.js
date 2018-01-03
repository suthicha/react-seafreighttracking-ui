import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './App.scss'

class App extends Component {
    componentWillMount(){
    }

    render(){
        const { children } = this.props

        return (
            <div>
                <div className={styles.content}>
                { children }
                </div>
            </div>
        )
    }
}

App.propTypes = { 
    children: PropTypes.object.isRequired,
}

export default App
