import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_SEARCH_MOVIE, API_IMAGE } from '../../../utils/constants';
import Loader from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import './MainMovie.css';

const styles = {
    main: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
    }
}
class MainMovie extends Component {
    state = {
        movie: {},
        isLoading: true,
        isError: false
    }
    componentWillMount() {
        axios.get(API_SEARCH_MOVIE + '&query=Avengers').then(response => {
            console.log(response);
            this.setState({
                movie: response.data.results[0],
                isLoading: false
            })
        }).catch(error => {
            console.log("error no get", error);
            this.setState({ isLoading: false, isError: error.message })
        })
    }

    render() {
        let mainMovie;
        if (this.state.isLoading) mainMovie = <Loader />
        else if (this.state.isError) mainMovie = <Error error={this.state.isError} />
        else {
            mainMovie = [<div key={0} className={'textMain'}>
                <span style={{ fontSize: '30px', margin: '10px' }}>{this.state.movie.title}</span><br />
                <span style={{ fontSize: '25px', margin: '10px' }}>{this.state.movie.overview}</span><br />
                <span style={{ fontSize: '15px', margin: '10px' }}>{this.state.movie.popularity}</span>
            </div>,
            <div key={1} className="imgGradient">
                <img className="imgMain" src={`${API_IMAGE}w780/${this.state.movie.backdrop_path}`} />
            </div>];
        }

        return (
            <div className="MainMovie" style={styles.main}>
                <div key={0} className={'textMain'}>
                    <span style={{ fontSize: '30px', margin: '10px' }}>{this.state.movie.title}</span><br />
                    <span style={{ fontSize: '25px', margin: '10px' }}>{this.state.movie.overview}</span><br />
                    <span style={{ fontSize: '15px', margin: '10px' }}>{this.state.movie.popularity}</span>
                </div>
                <div key={1} className="imgGradient">
                    <img className="imgMain" src={`${API_IMAGE}w1280/${this.state.movie.backdrop_path}`} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        apiConfig: state.apiConfig
    }
}
export default connect(mapStateToProps)(MainMovie);