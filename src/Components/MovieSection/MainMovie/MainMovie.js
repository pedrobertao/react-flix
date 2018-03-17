import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_SEARCH_MOVIE, API_IMAGE } from '../../../utils/constants';
import './MainMovie.css';

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
        let image;

        if (this.state.isLoading) image = <p style={{ color: 'white' }}> Loading Main </p>
        else if (this.state.isError) image = <p style={{ color: 'white' }}> {this.state.isError} </p>
        else image = <img className={'imgMain'} src={`${API_IMAGE}w780/${this.state.movie.backdrop_path}`} />



        return (
            <Container style={{ backgroundColor: 'black' }} fluid>
                <div className={'pickgradient'}>
                    {image}
                </div>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        apiConfig: state.apiConfig
    }
}
export default connect(mapStateToProps)(MainMovie);