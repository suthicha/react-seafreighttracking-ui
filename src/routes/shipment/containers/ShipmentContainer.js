import { connect } from 'react-redux'
import Shipment from '../components/Shipment'
import { fetchJobs, fetchBooking } from '../../../actions/actShipment'

const mapDistpatchToProps = {
    fetchJobs,
    fetchBooking,
}

const mapStateToProps = state => ({
    obShipment: state.shipmentReducer
})

export default connect(mapStateToProps, mapDistpatchToProps)(Shipment)
