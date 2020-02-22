import React from 'react';
import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import actions from '../redux/actions';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static async getInitialProps(ctx) {
    initialize(ctx);
  }

  async componentDidMount() {
    // await this.props.getUser(
    //   { token: this.props.authentication.token },
    //   'profile'
    // );
  }
  render() {
    console.log(this.props.authentication.user);

    return this.props.authentication.user ? (
      <h3>You are logged in as {this.props.authentication.user.firstname}</h3>
    ) : (
        <h3>You are not authenticated.</h3>
      );
  }
}


export default connect(state => state, actions)(Users);