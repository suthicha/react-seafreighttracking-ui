import React, { Component } from 'react'
import { formatDate } from '../../../utils/helper'
import SearchEtdForm from '../../../components/Form/searchEtdForm'
import {GridList, GridTile} from 'material-ui/GridList';
import JobList from './JobList'
import JobItemDrawer from './JobItemDrawer'

class Shipment extends Component {
    constructor(props){
        super(props)
        this.state = { departureDate: '', openEditJob: false, selectJob: null}
        this.datePickerChangeEventHandler = this.datePickerChangeEventHandler.bind(this)
        this.clickSearchEventHandler = this.clickSearchEventHandler.bind(this)
        this.clickJobItemEventHandler = this.clickJobItemEventHandler.bind(this)  
        this.clickToggleCloseEventHandler = this.clickToggleCloseEventHandler.bind(this) 
    }

    datePickerChangeEventHandler =(evt, date)=>{
        const departureDate = formatDate(date)
        this.setState({departureDate})
    }

    clickSearchEventHandler =(evt) => {
        evt.preventDefault()
        if (this.state.departureDate != ''){
           const { fetchJobs } = this.props
           const { departureDate } = this.state
           fetchJobs(departureDate)
        }
    }

    clickJobItemEventHandler = (job) => {
        // evt.preventDefault()
        console.log(job)
        this.setState({openEditJob: true, selectJob: job})
    }

    clickToggleCloseEventHandler = (evt) => {
        evt.preventDefault()
        this.setState({openEditJob:false})
    }


    render(){
        const { obShipment } = this.props

        return (
            <div>
                <SearchEtdForm 
                onClickSearch={this.clickSearchEventHandler}
                onChangeHandler={this.datePickerChangeEventHandler} />
                <JobList data={obShipment.jobs} onClickHandler={this.clickJobItemEventHandler} />
                { this.state.selectJob? <JobItemDrawer 
                    open={this.state.openEditJob} 
                    job={this.state.selectJob}
                    handlerClose={this.clickToggleCloseEventHandler} /> : "" }
            </div>
        )
    }
}

export default Shipment