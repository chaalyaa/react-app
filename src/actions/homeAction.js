import axios from "axios";
import config from "./../masterdata.json";

export const findByKeyword = (keyword, pages) => (dispatch) =>
{
    let params = {
            apikey: config.APIKey, 
            s: keyword,
            page: pages
            //...action.data
        }
    
        axios.get(config.PathOMDB,{params})
            .then(response => 
                dispatch({type: 'MOVIE_LIST_VIEW', list: response.data})
            )
            .catch(err =>err);
}