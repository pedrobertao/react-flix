import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_SEARCH_MOVIE } from '../../../utils/constants';
import './MainMovie.css';

class MainMovie extends Component {
    state = {
        movie: {}
    }
    componentWillMount() {
        axios.get(API_SEARCH_MOVIE + '&query=Avengers').then(response => {
            console.log(response);
            this.setState({
                movie: response.data.results[0]
            })
        }).catch(error => {
            console.log("error no get", error);
        })
    }
    render() {
        let image;
        if (this.props.apiConfig) {
            image = <img className={'imgMain'} src={this.props.apiConfig.imgBaseUrl + '/' + this.props.apiConfig.backDropSizes[2] + '/' + this.state.movie.backdrop_path} />
        }
        return (
            <Container style={{backgroundColor:'black'}} fluid>
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