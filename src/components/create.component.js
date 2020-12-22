
import React, { Component } from 'react';
import axios from 'axios'

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user_name: '',
      user_last_name: '',
      user_id: ''
    }
  }
  onChangeUserName(e) {
    this.setState({
      user_name: e.target.value
    });
  }
  onChangeUserLastName(e) {
    this.setState({
      user_last_name: e.target.value
    })
  }
  onChangeUserId(e) {
    this.setState({
      user_id: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      user_name: this.state.user_name,
      user_last_name: this.state.user_last_name,
      user_id: this.state.user_id
    };
    axios.post('http://localhost:4000/user/add', obj)
      .then(res => console.log(res.data));

    this.setState({
      user_name: '',
      user_last_name: '',
      user_id: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_name}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.user_last_name}
              onChange={this.onChangeUserLastName}
            />
          </div>
          <div className="form-group">
            <label>ID Number: </label>
            <input type="text"
              className="form-control"
              value={this.state.user_id}
              onChange={this.onChangeUserId}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Register User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}