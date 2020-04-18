import { connect } from 'react-redux'
import { login } from '../../actions/login'
import Login from "./login";

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.LoginReducer.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login())
        }
    }
}

const index = connect(mapStateToProps, mapDispatchToProps)(Login)

export default index