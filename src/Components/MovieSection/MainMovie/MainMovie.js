import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Item, Image } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import { API_SEARCH_MOVIE, API_IMAGE } from '../../../utils/constants';
import { readableDate } from '../../../utils/readableDate';
import Aux from '../../../hoc/Aux/Aux';
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
            this.setState({
                movie: response.data.results[0],
                isLoading: false
            })
        }).catch(error => {
            this.setState({ isLoading: false, isError: error.message })
        })
    }

    render() {
        let mainMovie;
        if (this.state.isLoading) mainMovie = <Loader />
        else if (this.state.isError) mainMovie = <Error error={this.state.isError} />
        else {
            mainMovie = <Container fluid>
                <div key={0} className={'textMain'}>
                    <span className="TextTitle">{this.state.movie.title}</span><br />
                    <p className="TextStar">
                        <StarRatingComponent
                            value={5}
                            fontSize={30}
                            starCount={10}
                            editing={false}
                        /></p> <br />
                    <span className="TextDescription">Lançamento: {readableDate(this.state.movie.release_date)}</span><br />
                    <p className="TextDescription" >{this.state.movie.overview}</p><br />
                    <span className="TextPop">Popularidade: {Math.round(this.state.movie.popularity)}</span>
                </div>
                <div key={1} className="imgGradient">
                    <img className="imgMain" src={`${API_IMAGE}w1280/${this.state.movie.backdrop_path}`} />
                </div>
            </Container>
        }

        return (
            <div className="MainMovie" style={styles.main}>
                {mainMovie}
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