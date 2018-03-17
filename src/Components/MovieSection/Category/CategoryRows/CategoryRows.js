import React, { Component } from 'react';
import './CategoryRows.css';
import Slider from 'react-slick';
import { Icon } from 'semantic-ui-react';
import { API_CATEGORY, API_IMAGE } from '../../../../utils/constants';
import { Transition } from 'react-transition-group'
import SingleMovie from '../SingleMovie/SingleMovie';
import axios from 'axios';


const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
        <div
            onClick={onClick}
            style={{ ...style, display: 'block', background: 'green' }}
        ><Icon name="arrow right" /></div>
    )
}
const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    variableWidth: true,
    swipeToSlide: true
};

class CategoryRows2 extends Component {
    state = {
        isLoading: true,
        movieList: [],
        isError: false,
        movieSelected: {},
        isMovieSelected: {
            'Mais Recente': false,
            'Ação': false,
            'Aventura': false,
            'Ficção': false,
            'Mistério': false
        },
    }
    componentWillMount() {
        let allRequest = [];
        for (let endpoint of API_CATEGORY) {
            allRequest.push(axios.get(endpoint));
        }
        axios.all(allRequest).then(axios.spread((...args) => {
            // console.log(">>>", args);
            this.setState({ movieList: args, isLoading: false })
        })).catch(error => {
            this.setState({ isLoading: false, isError: error.message })
        })
    }

    handleClickMovie = (genreIndex, movieSelected) => {
        let newSelection = { ...this.state.isMovieSelected };
        for (let genreLabel in newSelection) {
            if (genreLabel != genreIndex) {
                newSelection[genreLabel] = false;
            }
        }
        if (movieSelected.id == this.state.movieSelected.id || !newSelection[genreIndex]) {
            newSelection[genreIndex] = !newSelection[genreIndex];
        }
        this.setState({ isMovieSelected: newSelection, movieSelected });
    }

    buildGridRowV2 = () => {
        const movieGenre = ['Mais Recente', 'Ação', 'Aventura', 'Ficção', 'Mistério'];
        let sliderRow = [];
        let groupSlider = [];
        let finalGroup = [];

        this.state.movieList.map((genre, index) => {
            for (let i = 0; i < 10; i++) {
                sliderRow.push(
                    <div className="tile" onClick={() => this.handleClickMovie(movieGenre[index], genre.data.results[i])} key={genre.data.results[i].title}>
                        <div>
                            <img className="tile__img" src={`${API_IMAGE}/w300/${genre.data.results[i].backdrop_path}`} alt="" />
                        </div>
                        <div className="tile__details">
                            <div className="tile__title">
                                {genre.data.results[i].title}
                            </div>
                        </div>
                    </div>)

            }
            groupSlider.push(sliderRow);
            sliderRow = [];
        });

        groupSlider.map((row, index) => {
            finalGroup.push(
                <div key={index}>
                    <p style={{ color: 'white' }}>{movieGenre[index]} </p>
                    <Slider {...settings}>
                        {row}
                    </Slider>
                    <SingleMovie isMovieSelected={this.state.isMovieSelected[movieGenre[index]]} movieSelected={this.state.movieSelected} />
                </div>
            )
        });
        return finalGroup;

    }

    render() {
        let gridsByGenre;
        gridsByGenre = this.buildGridRowV2();

        if (this.state.isLoading) gridsByGenre = <p style={{ color: 'white' }}> Loading Rows </p>;
        else if (this.state.isError) gridsByGenre = <p style={{ color: 'white' }}>{this.state.isError}</p>
        else gridsByGenre = this.buildGridRowV2();

        return gridsByGenre;

    }

}

export default CategoryRows2;