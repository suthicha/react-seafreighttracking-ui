// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 12.01.2018
// description: connect nodejs job api.
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import _ from 'lodash'
import * as config from '../settings'
import axios from 'axios'

class ShipmentApi {
    static fetchJobs(etd){
        const ticket = localStorage.getItem('ticket')
        return new Promise((resolve, reject)=>{
            _.delay(()=>{
                axios.get(`${config.API_URL}/jobs/${etd}?token=${ticket}`)
                    .then(callback => {
                        resolve(callback.data)
                    })
                    .catch(error => {reject(error)})
            }, config.DELAY)
        })
    }

    static fetchBooking(refno){
        const ticket = localStorage.getItem('ticket')
        return new Promise((resolve, reject)=>{
            _.delay(()=>{
                axios.get(`${config.API_URL}/booking/${refno}?token=${ticket}`)
                    .then(callback => {
                        console.log('ShipmentApi fetchBooking', callback)
                    })
                    .catch(error => {reject(error)})
            }, config.DELAY)
        })        
    }
}

export default ShipmentApi
