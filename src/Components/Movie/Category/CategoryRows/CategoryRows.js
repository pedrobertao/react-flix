import React, { Component } from 'react';

import { API_CATEGORY } from '../../../../utils/constants';

import { Container, Image } from 'semantic-ui-react';
import axios from 'axios';
import SingleMovie from '../SingleMovie/SingleMovie';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import './CategoryRows.css';
import { API_IMAGE } from '../../../../utils/constants';

class CategoryRows extends Component {
    state = {
        movieList: [],
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
            console.log(">>>", args);
            this.setState({ movieList: args })
        })).catch(error => {
            console.log(">>", error);
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
        let grids = [];
        let gridColumn = [];
        let gridRow = [];
        let allMovies = {};
        this.state.movieList.map((genre, index) => {
            for (let i = 0; i < 10; i++) {
                gridColumn.push(
                    <div onClick={() => this.handleClickMovie(movieGenre[index], genre.data.results[i])} key={genre.data.results[i].title} className="tile">
                        <div className="tile__media">
                            <img className="tile__img" src={`${API_IMAGE}/w300/${genre.data.results[i].backdrop_path}`} alt="" />
                        </div>
                        <div className="tile__details">
                            <div className="tile__title">
                                {genre.data.results[i].title}
                            </div>
                        </div>
                    </div>)

            }
            gridRow.push(gridColumn);
            gridColumn = [];
        });

        gridRow.map((row, index) => {
            grids.push(
                <div key={index}>
                    <div className="row">
                        <div className="row__inner">
                            {movieGenre[index]}
                            {row}
                        </div>
                    </div>
                    {this.state.isMovieSelected[movieGenre[index]] ? <SingleMovie movieSelected={this.state.movieSelected} /> :
                        null}
                </div>
            )
        });
        return grids;

    }

    // buildGridRow = () => {
    //     const movieGenre = ['Mais Recente', 'Ação', 'Aventura', 'Ficção', 'Mistério'];
    //     let grids = [];
    //     let gridColumn = [];
    //     let gridRow = [];
    //     for (let genre of this.state.movieGenre) {
    //         for (let i = 0; i < 10; i++) {
    //             gridColumn.push(
    //                 <Grid.Column>
    //                     <Image centered src={'https://image.tmdb.org/t/p/w300' + genre.data.results[i].backdrop_path} />
    //                     {movieGenre[genre.data.results[i].genre]}
    //                     {genre.data.results[i].title}
    //                 </Grid.Column>
    //             )
    //         }
    //         gridRow.push(gridColumn);
    //         gridColumn = [];
    //     }

    //     gridRow.map((row, index) => {
    //         grids.push(
    //             <div style={{ color: 'white' }}>
    //                 {movieGenre[index]}
    //                 <Grid columns={10}>
    //                     {row}
    //                 </Grid>
    //             </div>
    //         )
    //     });
    //     return grids;
    // }

    render() {
        let gridsByGenre = <p> Loading </p>;
        if (this.state.movieList) {
            gridsByGenre = this.buildGridRowV2();
        }
        return (
            <Container fluid>
                <div>
                    {gridsByGenre}
                </div>
            </Container>
        )
    }
}

export default CategoryRows;