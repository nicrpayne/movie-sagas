import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import MovieItem from "../MovieItem/MovieItem";

class MovieList extends Component {

    componentDidMount() {
        // Gets movies and holds them in moviesReducer
        this.props.dispatch({ type: 'GET_MOVIES' });
    }

    render() {
        return (
            <div className="MovieList">
                <h1 className="MovieList-Header">Movie Sagas</h1>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MovieList);