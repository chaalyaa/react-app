const initiateState = {
    ListMovies: [], 
    pages: 1
}

const dataMovies = (state = initiateState, action) => {
    if(action.type === "MOVIE_LIST_VIEW") 
    {
        return state = {
            ...state,
            ListMovies: action.list
        };
    } 

    if(action.type === "MOVIE_TO_PAGE")
    {
        return state = {
            ...state,
            pages: action.toPage
        };
    }

    

    return state;
}


export default dataMovies;

