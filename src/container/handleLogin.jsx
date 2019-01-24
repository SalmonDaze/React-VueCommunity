import Login from './login'
import { connect } from 'react-redux'
import { login, logout } from '../Action/index'

const mapStateToProps = ( state, ownProps ) => ({
    token: state.token
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleLogin: () => {
        dispatch(login(ownProps.token))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login)