import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUsers";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    this.setState({ users: response.data.data, isLoading: false });
  }
  render() {
    return (
      <>
        <button onClick={this.handleCreate} className="btn btn-lg btn-primary">
          create
        </button>
        <div className="row">
          {this.state.isLoading ? (
            <LoadingUsers />
          ) : (
            this.state.users.map((user) => {
              return (
                <div className="col-4 text-center p-5">
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                    alt=""
                  />
                  <Link to ={`/user/${user.id}`}>
                  <h4>
                    {user.first_name}
                    {user.last_name}
                  </h4>
                  </Link>
                  <h5>{user.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={() => {
                          this.handleUpdate(user);
                        }}
                        className="btn btn-info btn-sm"
                      >
                        update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => {
                          this.handleDelete(user);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
  handleCreate = async () => {
    const newUser = {
      first_name: "mo",
      last_name: "be",
      emaile: "mo_be@gmail.com",
      avatar:
        "http://www.neonlearn.ir/uploads/images/users/1587741072106-photo_2018-09-25_21-36-49.jpg",
    };
    // const response = await axios.post("https://reqres.in/api/users", newUser);
    this.setState({ users: [...this.state.users, newUser] });
  };
  handleUpdate = async (user) => {
    user.first_name = "update";
    const response = await axios.put(
      `https://reqres.in/api/users/${user.id}`,
      user
    );
    console.log(response);
    const updateUsers = [...this.state.users];
    const index = updateUsers.indexOf(user);
    updateUsers[index] = { ...user };
    this.setState({ user: updateUsers });
  };
  handleDelete = async (user) => {
    const response = await axios.delete(
      `https://reqres.in/api/users/${user.id}`
    );
    console.log(response);
    const newUsers = this.state.users.filter((u) => u.id !== user.id);
    this.setState({users:newUsers});
  };
}

export default Users;
