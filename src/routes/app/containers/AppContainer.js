import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { removeAuthFromStorage, validateAuth } from '../../../actions/actAuthState'
import App from '../components/App'


const mapDispatchToProps = {
    validateAuth,
    removeAuthFromStorage,
}

const mapStateToProps = state => ({
    authState: state.authStateReducer,
    progressLoading: state.loadingReducer,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(App))