import React from 'react';
import AuthUserContext from './context';


const withAuth = Component => {
  class WithAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: {
          profileNum: undefined
        },
      };
    }

    componentDidMount() {
      this.props.auth.endPersistence(localStorage.getItem('persist'));
      const isAuth = this.props.auth.isAuthenticated();
      console.log(isAuth);
      if (isAuth) {
        const user = this.props.auth.getProfile();
        if (user.profileNum) {
          console.log(user.profileNum)
          this.setState({ authUser: user });
        } else {
          this.forceUpdate();
        }
      }
    }

    getAuth = user => {
      console.log('setting state');
      this.setState({
        authUser: user,
      });
    }

    render() {
      const authContext = {
        authUser: this.state.authUser,
        authMethods: this.props.auth,
        getAuth: this.getAuth,
      };
      return (
        <AuthUserContext.Provider value={authContext} >
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuth;
};

export default withAuth;
