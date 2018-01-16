import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import JobItem from './JobItem'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
  } from 'material-ui/Table';

const styles = {
    card: { padding: '10px', margin: '10px', marginBottom: '45px', minHeight: '500px', backgroundColor: '#fff'},
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
    div: { display: 'inline-flex'}
};


const JobList = ({data, onClickHandler}) => (
    <Card style={styles.card}>
        <CardTitle subtitle="RESULT" />
        <CardText>
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>ETD.</TableHeaderColumn>
                    <TableHeaderColumn>JOBNO</TableHeaderColumn>
                    <TableHeaderColumn>CUSTOMER</TableHeaderColumn>
                    <TableHeaderColumn>MASTERJOB</TableHeaderColumn>
                    <TableHeaderColumn>BOOKINGNO</TableHeaderColumn>
                    <TableHeaderColumn>CTN.</TableHeaderColumn>
                    <TableHeaderColumn>OBL</TableHeaderColumn>
                    <TableHeaderColumn>DEST.</TableHeaderColumn>
                    <TableHeaderColumn>SEND</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                { data.map((job,index)=>{
                    return <JobItem key={index} index={index} job={job} onClickHandler={onClickHandler}/>
                })}
            </TableBody>
        </Table>
        </CardText>
    </Card>
)

export default JobList