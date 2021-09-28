import logo from './logo.svg';
import './App.css';
import CardView from './component/cardView';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findByKeyword } from './actions';
import Select from 'react-select';

function App() {  

  const dispatch = useDispatch();
  const {ListMovies, pages} = useSelector( state=>state.dataMovies );  

  useEffect(()=>{
    dispatch(findByKeyword("Batman", pages));
  },[dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Natasha
        </p>        
      </header>
      
      <div style={{ minHeight: "800px" }}>
        {
          ListMovies.hasOwnProperty('Search') ? 
          ListMovies.Search.map((item) => {
            return <CardView data={item}></CardView>
          }) : null
        }
      </div>
        <button>Next</button>
        <button>Preview</button>
    </div>
  );
}



export default App;
