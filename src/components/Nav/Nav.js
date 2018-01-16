import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

const Nav = ({title, handleToggle }) => {
   
    return (<AppBar
        title = {title}
        onLeftIconButtonClick = {handleToggle}
    />)
}

export default Nav