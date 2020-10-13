import React, {useEffect, useState} from 'react';

const JokeDemo = () => {
  const [isLoadingJoke, setIsLoadingJoke] = useState(false);
  // store joke search results
  const [jokes, setJokes] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoadingJoke(true);
    searchJokes();
  }, []);

  //https://icanhazdadjoke.com/
  const searchJokes = () => {
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      //options object
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        console.log('joke', jokes);
        setJokes(jokes);
        // setJoke(json.joke);
        setIsLoadingJoke(false);
      }); //json returns promise
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // console.log("form submit");
    setSearchTerm();
  };

  return (
    <div className="App">
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="Enter search term... "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button>Search</button>
        {/* disable button when joke is loading */}
        <button onClick={searchJokes} disabled={isLoadingJoke}>
          Tell me a joke
        </button>
        <p>{isLoadingJoke ? 'Loading joke...' : jokes.toString()}</p>
        {/* <p>isLoadingJoke: {isLoadingJoke.toString()}</p> */}
        <p>search term: {searchTerm}</p>
      </form>
    </div>
  );
};

export default JokeDemo;