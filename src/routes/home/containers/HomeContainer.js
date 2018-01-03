import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Home from '../components/Home'

const mapDispatchToProps = {

}

const mapStateToProps = state => ({
    form: state.form,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)