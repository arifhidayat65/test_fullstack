import {signOut}  from '../actions';
import { connect } from 'react-redux'

const UserSignOut = (props) =>{
    props.signOut();
    props.history.push("/");
    return null;
}

const mapDispatchToProps = dispatch => ({
    signOut:()=> {
      //menghapus local storage
      window.localStorage.removeItem("state");
      dispatch(signOut());
    }
  })

export default connect(
    null,
    mapDispatchToProps
  )(UserSignOut)
