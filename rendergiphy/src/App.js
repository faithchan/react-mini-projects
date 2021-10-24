import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. Need to create states to search gif & set Gif
  const [gif, setGif] = useState('');
  const [search, setSearch] = useState('');
  //2. Get api key
  const apiKey = 'bT7gNolp3beGGUNqf1elHuqjiYMhO0T7';
  const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;

  //3. On page load, generate a random gif once
  const generateRandomGif = () => {
    fetch(gifUrl)
      .then((res) => {
        return res.json();
      })
      .then((Json) => {
        console.log(Json.data);
        setGif(Json.data.images.original.url)
      })
  }

  useEffect(() => { generateRandomGif() }, [])

  // Get user input 
  const searchGif = (enteredText) => {
    return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${enteredText}&limit=25&offset=0&rating=g&lang=en`
  }

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const getNewGif = searchGif(search)
    console.log(getNewGif)
    fetch(getNewGif)
      .then((res) => {
        return res.json();
      })
      .then((Json) => {
        console.log(Json)
        setGif(Json.data[0].images.original.url)
      })
  }

  return (<div className="App">
    <h1>Giphy</h1>
    <form onSubmit={submitHandler}>
      <input
        onChange={onChangeHandler}
        name="search"
        type="text"
        value={search}
        placeholder="Search for gifs"
      />
      <input name="submit" type="submit" />

    </form>
    <input
      name="randomSubmit"
      type="submit"
      value="Random Gif"
      onClick={generateRandomGif}
    />
    <br />
    <img src={gif} alt="image" />
  </div>)


}

export default App;
