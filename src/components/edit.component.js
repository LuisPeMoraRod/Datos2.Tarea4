import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:4000/user/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    user_name: response.data.user_name,
                    user_last_name: response.data.user_last_name,
                    user_id: response.data.user_id
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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
        axios.post('http://localhost:4000/user/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update User</h3>
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
                        <label>ID: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.user_id}
                            onChange={this.onChangeUserId}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update User"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}