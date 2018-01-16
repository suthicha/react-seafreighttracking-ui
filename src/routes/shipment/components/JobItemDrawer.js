import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import JobItemEdit from './JobItemEdit'

class JobItemDrawer extends Component{

    render(){
        const { open, job, handlerClose } = this.props
        return (
            <Drawer width={'100%'} openSecondary={true} open={open} >
                <AppBar title={job.JobNo}
                iconElementRight={<IconButton><NavigationClose onClick={handlerClose} /></IconButton>}
                 />
                <JobItemEdit job={job} />
            </Drawer>
        )
    }
}

export default JobItemDrawer