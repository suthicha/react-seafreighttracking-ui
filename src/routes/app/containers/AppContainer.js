import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import App from '../components/App'


const mapDispatchToProps = {
}

const mapStateToProps = state => ({
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(App))