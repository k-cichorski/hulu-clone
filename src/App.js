import React, {useState} from 'react';
import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import requests from '../src/requests';
import {useStateValue} from "./store/StateProvider";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(requests.fetchTrending);
    const [{moreInfo}, dispatch] = useStateValue();

    return (
      <div className="App">
        <Header/>

        <Nav setSelectedCategory={setSelectedCategory}/>

        <Results selectedCategory={selectedCategory}/>
      </div>
    );
}

export default App;
