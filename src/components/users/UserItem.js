import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col-lg-4 col-md-6 mt-3 user-item">
      <div className="card p-3 mb-2">
        <img
          src={avatar_url}
          className="rounded-circle mx-auto"
          style={{ width: "60px" }}
          alt=""
        />
        <h3 className="mx-auto">{login}</h3>
        <div className="mx-auto">
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
