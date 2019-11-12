import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light mt-2">
          Back to Search
        </Link>
        <p className="mb-5 mt-2 ml-2 d-inline-block">
          Hireable: {""}
          {hireable ? (
            <i className=" ml-2 fas fa-check text-success" />
          ) : (
            <i className=" ml-2 fas fa-times-circle text-danger" />
          )}
        </p>
        <div className="card p-4">
          <div className="row">
            <div className="text-center col-6">
              <img
                src={avatar_url}
                className="rounded-circle"
                style={{ width: "150px" }}
                alt=""
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div className="col-6">
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark">
                Visit GitHub profile
              </a>
              <ul className="github-bio mt-4">
                <li>
                  {login && (
                    <Fragment>
                      <strong className="mr-1">Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong className="mr-1">Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong className="mr-1">Website: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
