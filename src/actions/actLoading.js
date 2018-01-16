import * as types from './actTypes'

export function beginLoading(){
    return {
        type: types.BEGIN_LOADING,
        payload: true,
    }
}


export function endLoading(){
    return {
        type: types.END_LOADING,
        payload: false,
    }
}