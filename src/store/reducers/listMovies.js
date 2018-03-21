import * as constants from '../actions/constants';

const initialState = {
    list: [{
        "vote_count": 13826,
        "id": 24428,
        "video": false,
        "vote_average": 7.5,
        "title": "Os Vingadores",
        "popularity": 66.747199,
        "poster_path": "/enkQRpdhnvHEnO66j4UJ9szrUtS.jpg",
        "original_language": "en",
        "original_title": "The Avengers",
        "genre_ids": [
            878,
            28,
            12
        ],
        isFavorite: true,
        "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
        "adult": false,
        "overview": "Loki (Tom Hiddleston) retorna à Terra enviado pelos chitauri, uma raça alienígena que pretende dominar os humanos. Com a promessa de que será o soberano do planeta, ele rouba o cubo cósmico dentro de instalações da S.H.I.E.L.D. e, com isso, adquire grandes poderes. Loki os usa para controlar o dr. Erik Selvig (Stellan Skarsgard) e Clint Barton/Gavião Arqueiro (Jeremy Renner), que passam a trabalhar para ele. No intuito de contê-los, Nick Fury (Samuel L. Jackson) convoca um grupo de pessoas com grandes habilidades, mas que jamais haviam trabalhado juntas: Tony Stark/Homem de Ferro (Robert Downey Jr.), Steve Rogers/Capitão América (Chris Evans), Thor (Chris Hemsworth), Bruce Banner/Hulk (Mark Ruffalo) e Natasha Romanoff/Viúva Negra (Scarlett Johansson). Só que, apesar do grande perigo que a Terra corre, não é tão simples assim conter o ego e os interesses de cada um deles para que possam agir em grupo.",
        "release_date": "2012-04-25"
    }]
}

const movieListReducer = (state = initialState, action) => {
    let updatedState;
    let updatedMovie;
    switch (action.type) {
        case constants.ADD_LIST_MOVIES:
            updatedState = { ...state };
            action.movie.isFavorite = true;
            updatedState.list = [].concat(updatedState.list, action.movie);
            return updatedState;
            break;

        case constants.REMOVE_LIST_MOVIES:
            updatedState = { ...state };
            updatedState.list = updatedState.list.filter(m => m.id != action.movieId);
            return updatedState;
            break;
        default:
            return state;
    }
}

export default movieListReducer;