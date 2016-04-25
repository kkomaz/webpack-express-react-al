import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/movie_action';

const { func } = React.PropTypes;

class FormSubmission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: '',
      releaseYear: '',
      director: '',
      genre: '',
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.createMovie(this.state);
    this.setState({
      movieTitle: '',
      releaseYear: '',
      director: '',
      genre: '',
    });
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <form className="form-submission" onSubmit={this.onFormSubmit}>
        <h2>Movie Submission Form</h2>
        <div className="form-submission__title">
          <input
            type="text"
            className="form-submission__title-input"
            placeholder="Movie Title"
            value={this.state.movieTitle}
            onChange={this.onInputChange}
            id="movieTitle"
          />
        </div>

        <div className="form-submission__release-year">
          <input
            type="text"
            className="form-submission__release-year-input"
            placeholder="Release Year"
            value={this.state.release}
            onChange={this.onInputChange}
            id="releaseYear"
          />
        </div>

        <div className="form-submission__director">
          <input
            type="text"
            className="form-submission__director-input"
            placeholder="Director Name"
            value={this.state.director}
            onChange={this.onInputChange}
            id="director"
          />
        </div>

        <div className="form-submission__genre">
          <input
            type="text"
            className="form-submission__genre-input"
            placeholder="Genre"
            value={this.state.genre}
            onChange={this.onInputChange}
            id="genre"
          />
        </div>

        <button type="sumbit" className="button">Submit</button>
      </form>
    );
  }
}

FormSubmission.propTypes = {
  createMovie: func,
  onFormSubmit: func,
};

export default connect(null, actions)(FormSubmission);
