import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

const rowStyle = {
    verticalAlign: 'middle'
}

const formatdate = (date) => {
    var date = new Date(date)
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return year + '-' + month + '-' + day;
}

const JobItem = ({index, job, onClickHandler}) => (
    <TableRow>
        <TableRowColumn style={rowStyle}>{ formatdate(job.DepartureDate)}</TableRowColumn>        
        <TableRowColumn style={rowStyle}>{job.JobNo}</TableRowColumn>
        <TableRowColumn style={rowStyle} >{job.CustomerName}</TableRowColumn>
        <TableRowColumn style={rowStyle}>{job.MasterJobNo}</TableRowColumn>
        <TableRowColumn style={rowStyle}>{job.BookingNo}</TableRowColumn>
        <TableRowColumn style={rowStyle}>{job.ContainerNo}</TableRowColumn>
        <TableRowColumn style={rowStyle}>{job.OBL}</TableRowColumn>
        <TableRowColumn style={rowStyle}>{job.DestCode}</TableRowColumn>
        <TableRowColumn style={rowStyle}>
            <RaisedButton 
                onClick={()=> onClickHandler(job)}
                label="Edit" 
                style={{margin: '12'}} />
        </TableRowColumn>
      </TableRow>
)

export default JobItem;


