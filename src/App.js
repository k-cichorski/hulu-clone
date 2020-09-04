import React, {useState} from 'react';
import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import requests from '../src/requests';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(requests.fetchTrending);

    return (
      <div className="App">
        <Header/>

        <Nav setSelectedCategory={setSelectedCategory}/>

        <Results selectedCategory={selectedCategory}/>
      </div>
    );
}

export default App;
