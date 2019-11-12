import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='mt-2'>
          <div className='form-group'>
            <input
              name='text'
              type='text'
              className='form-control mb-2'
              placeholder='Search Users'
              value={this.state.text}
              onChange={this.onChange}
            />
            <input
              type='submit'
              value='Search'
              className='btn btn-primary mx-auto w-100'
            />
          </div>
        </form>
        {showClear && (
          <button className='btn btn-dark w-100' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
