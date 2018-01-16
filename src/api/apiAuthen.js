// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 02.01.2018
// description: connect nodejs authenticate api.
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import _ from 'lodash'
import * as config from '../settings'
import axios from 'axios'

class AuthentApi {
    static fetchLogin(username, password){
        return new Promise((resolve, reject)=>{
            _.delay(()=>{
                axios.post(`${config.API_URL}/login`,{LoginName: username, Password: password})
                    .then(callback => {
                        resolve(callback.data)
                    })
                    .catch(error => {reject(error)})
            }, config.DELAY)
        })
    }
}

export default AuthentApi
