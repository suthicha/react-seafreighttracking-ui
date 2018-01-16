import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

export const fields = ['JobNo']

const styles = {
    card: { padding: '10px', margin: '10px', marginBottom: '45px', minHeight: '500px', backgroundColor: '#fff'},
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
    div: { display: 'inline-flex'}
};

class JobItemEdit extends Component {

    render() {
        const { 
            ArrivalDate, 
            BookingNo,
            BranchNo,
            CarrierBookingNo,
            ContainerNo,
            CustomerName,
            CustomerNo,
            DeliveryDate,
            DepartureDate,
            DestCode,
            DestName,
            FeederVessel,
            HBL,
            JobNo,
            MasterJobNo,
            MotherVessel,
            OBL,
            PortOfDischargeCode,
            PortOfDischargeName,
            PortOfLoadingCode,
            PortOfLoadingName,
            Remark,
            Status,
            TaxNo,
            TrxNo,
            VoyageNo,
        } = this.props.job

        return (
            <Card style={styles.card}>
                <CardTitle title="SHIPMENT INFO." subtitle="Please verify before submit to system." />
                <CardText>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <TextField
                                defaultValue={JobNo}
                                floatingLabelText="JobNo"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-8">
                                <TextField
                                defaultValue={CustomerName}
                                floatingLabelText="Customer Name"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField
                                defaultValue={MasterJobNo}
                                floatingLabelText="Master JobNo"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={BookingNo}
                                floatingLabelText="BookingNo"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={HBL}
                                floatingLabelText="HBL"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField
                                defaultValue={OBL}
                                floatingLabelText="OBL"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                /> 
                            </div>
                            <div className="col-md-8">
                            <TextField
                                defaultValue={ContainerNo}
                                floatingLabelText="Container"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                /> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField
                                defaultValue={MotherVessel}
                                floatingLabelText="MotherVessel"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={VoyageNo}
                                floatingLabelText="VoyageNo"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={FeederVessel}
                                floatingLabelText="Feeder Vessel"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField
                                defaultValue={PortOfLoadingCode}
                                floatingLabelText="LoadingPort(Code)"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={PortOfLoadingName}
                                floatingLabelText="LoadingPort(Name)"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField
                                defaultValue={PortOfDischargeCode}
                                floatingLabelText="DischargePort(Code)"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={PortOfDischargeName}
                                floatingLabelText="DischagePort(Name)"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField
                                defaultValue={DestCode}
                                floatingLabelText="DestCode"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={DestName}
                                floatingLabelText="DestinationName"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                disabled={true}
                                />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField
                                defaultValue={ArrivalDate}
                                floatingLabelText="ETA"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                />  
                            </div>
                            <div className="col-md-4">
                            <TextField
                                defaultValue={DepartureDate}
                                floatingLabelText="ETD"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <TextField
                                defaultValue={Remark}
                                floatingLabelFixed={true}
                                floatingLabelText="Remark"
                                rows={2}
                                multiLine={true}
                                fullWidth={true}
                                />
                            </div>
                        </div>
                    </div>  
                 
                </CardText>
                <CardActions style={{textAlign: 'center'}}>
                <RaisedButton label="SAVE" primary={true} style={{margin: '12'}} />
                </CardActions>
            </Card>
        )
    }
}

export default JobItemEdit

