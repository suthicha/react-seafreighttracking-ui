import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    card: { padding: '10px', margin: '10px', backgroundColor: '#ddd'},
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
    div: { display: 'inline-flex'}
};


const SearchEtdForm = ({ onChangeHandler, onClickSearch }) => {
    const minDate = new Date()
    return (
        <Card style={styles.card}>
            <CardText>
                <div style={styles.div}>
                    <div style={{ alignSelf: 'center' }}>
                        Please select departure date :
                    </div>
                    <div style={{ alignSelf: 'center', paddingLeft: '10px',}}>
                        <DatePicker 
                        defaultDate={minDate}
                        hintText="Select Departure Date" 
                        container="inline" 
                        onChange={onChangeHandler}
                        mode="landscape"/>
                    </div>
                    <div style={{alignSelf: 'center', paddingLeft: '10px'}}>
                        <RaisedButton 
                            onClick={onClickSearch}
                            label="Search" 
                            style={{margin: '12'}} />
                    </div>
                </div>
            </CardText>

        </Card>
    )
}

export default SearchEtdForm