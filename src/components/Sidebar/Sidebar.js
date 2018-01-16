import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaiseButton from 'material-ui/RaisedButton'

const Sidebar = ({showMenu, menuItems, handlerToggle, handlerClose, handlerLogout, onHandlerRequestChange}) => {
    const renderMenuChild = (items, onEventHandlerClose) => {
        return items.map((menu, i)=> {
            return <MenuItem 
                        key={i} 
                        href={menu.to}
                        onClick={onEventHandlerClose}>
                        {menu.title}
                    </MenuItem>
        })
    }
    return (
        <div>
            <Drawer
                docked={false}
                width={200}
                open={showMenu}
                onRequestChange={onHandlerRequestChange}>
                { renderMenuChild(menuItems, handlerClose)}
                <MenuItem onClick={handlerLogout}>Logout</MenuItem>
            </Drawer>
        </div>
    )
}

export default Sidebar;