// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 2018.01.10
// description: login container
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { checkLogin } from '../../../actions/actAuthen'
import { addAuthToSorage, validateAuth } from '../../../actions/actAuthState'
import Login from '../components/Login'
export const fields = ['LoginName', 'Password']

const mapDispatchToProps = {
    checkLogin,
    addAuthToSorage,
    validateAuth,
}

const mapStateToProps = state => ({
    form: state.form,
    obAuth: state.loginReducer,
})


const LoginView = connect(mapStateToProps, mapDispatchToProps)(Login)

const validate = (values) => {
    const errors = {}
    if (!values.LoginName) {
        errors.LoginName = 'Please enter username'
      }
      if (!values.Password) {
        errors.Password = 'Please enter a password'
      }
      if (values.Password && values.Password.length < 6){
        errors.Password = 'Password must be at least 6 characters.'
      }
    return errors
}

export default reduxForm({
    form: 'signin',
    fields,
    validate
})(LoginView)