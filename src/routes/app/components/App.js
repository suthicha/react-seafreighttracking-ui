import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './App.scss'
import Nav from '../../../components/Nav'
import Sidebar from '../../../components/Sidebar'
import { PROJECT_NAME } from '../../../settings'

class App extends Component {
    constructor(props){
        super(props)
        this.state = { showMenu: false }
        this.handleToggleEventHandler = this.handleToggleEventHandler.bind(this)
        this.handleCloseEventHandler = this.handleCloseEventHandler.bind(this)
        this.handleLogoutEventHandler = this.handleLogoutEventHandler.bind(this)
    }
    componentWillMount(){
        const { validateAuth } = this.props
        validateAuth()
    }

    componentDidMount(){
        
    }

    componentWillReceiveProps(nextProps){
        
    }

    handleToggleEventHandler = (evt) =>{
        this.setState({ showMenu: !this.state.showMenu })
    }

    handleCloseEventHandler = (evt) => {
        this.setState({ showMenu: false })
    }

    handleLogoutEventHandler = (evt) => {
        this.setState({ showMenu: false })
        const { removeAuthFromStorage, validateAuth } = this.props
        removeAuthFromStorage()
        validateAuth()
    }

    render(){
        const { authState, children, currentTicket, progressLoading } = this.props

        if (!authState.isAuthen){
            return (
                <div className={styles.content}>
                { children }
                </div>
            )
        }

        return (
            <div>
                <Nav title={PROJECT_NAME} 
                handleToggle={this.handleToggleEventHandler} />
                <Sidebar
                    showMenu = {this.state.showMenu}
                    menuItems = {[{title:'Tracking', to:'tracking'},{title:'Shipment', to: 'shipment'}]}
                    handlerToggle = {this.handleToggleEventHandler}
                    handlerClose = {this.handleCloseEventHandler}
                    handlerLogout = {this.handleLogoutEventHandler}
                    onHandlerRequestChange = {(showMenu)=>{this.setState({showMenu})}}
                />
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
