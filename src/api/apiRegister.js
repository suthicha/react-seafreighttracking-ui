// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 02.01.2018
// description: connect to register api.
// email: <isuthicha@gmail.com>
// -----------------------------------------------

import _ from 'lodash'
import axios from 'axios'
import * as config from '../settings'

class RegisterApi {
    static postUser(user){
        return new Promise((resolve, reject)=>{
            _.delay(()=>{
                axios.post(`${config.API_URL}/register`, {})
                    .then(callback => {})
                    .catch(error => {reject(error)})
            }, config.DELAY)
        })
    }
}