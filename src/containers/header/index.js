import { connect } from 'react-redux'
import { logout } from '../../actions/login'
import header from "./header";

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.LoginReducer.userInfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

const index = connect(mapStateToProps, mapDispatchToProps)(header)

export default index;