import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/movie_action';
import Form from '../form/form_submission';

const { func, array } = React.PropTypes;

class MoviesIndex extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    const { movies } = this.props;
    return movies.map((movie) => {
      return (
        <li className="movie" key={movie._id}>{movie.title}</li>
      );
    });
  }

  render() {
    return (
      <div className="movie-index">
        <Form />
        {this.renderMovies()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.MovieReducer.movies,
  };
}

MoviesIndex.propTypes = {
  fetchMovies: func,
  movies: array,
};

export default connect(mapStateToProps, actions)(MoviesIndex);
