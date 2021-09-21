import './App.css';
import React from 'react';
import axios from 'axios';
import People from './Components/People/People';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {

  const baseUrl = 'https://swapi.dev/api/people';
  const [people, setPeople] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPeople(response.data.results);
    });
  }, []);

  if (!people) return null;

  return (
    <div className="App">
      <div className="container">
        <div className="row col">
          <h1 >ADM_react</h1>
        </div>
      </div>
      <div className="container" >
        <div className="row">
          <div className="col">
            <People value={people} ></People>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
