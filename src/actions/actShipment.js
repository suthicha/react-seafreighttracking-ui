import * as types from './actTypes'
import ShipmentApi from '../api/apiShipment'
import { beginLoading, endLoading } from './actLoading'

export function fetchJobsSuccess(data){
    return {
        type: types.FETCH_SHIPMENT_JOBS,
        payload: data,
    }
}

export function fetchBookingSuccess(data){
    return {
        type: types.FETCH_SHIPMENT_BOOKING,
        payload: data,
    }
}

export function fetchShipmentError(error){
    return {
        type: types.FETCH_SHIPMENT_ERROR,
        payload: error,
    }
}

export function fetchJobs(etd){
    return (dispatch)=> {
        dispatch(beginLoading())
        ShipmentApi.fetchJobs(etd).then((data)=>{
            dispatch(fetchJobsSuccess(data))
            dispatch(endLoading())
        }).catch((error)=>{
            dispatch(fetchShipmentError(error))
        })
    }
}

export function fetchBooking(refno){
    return (dispatch)=> {
        ShipmentApi.fetchBooking(refno).then((data)=>{
            dispatch(fetchBookingSuccess(data))
        }).catch((error)=>{
            dispatch(fetchShipmentError(error))
        })
    }
}