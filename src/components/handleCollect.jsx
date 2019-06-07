import strandContent from './strandContent'
import { connect } from 'react-redux'
import { login, logout } from '../Action/index'

const mapStateToProps = ( state, ownProps ) => ({
    token: state.token
})

export default connect(
    mapStateToProps
    )(strandContent)