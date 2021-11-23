
  
import React, { useState, useEffect } from "react";
import Result from "./Result";


function Search() {

    const [movieQuery, setMovieQuery] = useState("");
    const [showResult, setshowResult] = useState([]);
    const [Button, setButton] = useState(true);



    const makeAPICall = async () => {
        const endpoint = `https://api.tvmaze.com/search/shows?q=${movieQuery}`;
        const res = await fetch(endpoint);
        const json = await res.json();
        setshowResult([...json])

    };


    useEffect(() => {
        makeAPICall();
    }, [movieQuery]);

    const handleChange = (e) => {

        const query = e.target.value;
        setMovieQuery(query);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        makeAPICall();
        setButton(false);

    }

    const onClickSearch = () => setButton(true);

    return (
        <>
            {Button ?
                <form className="Search" onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            placeholder="Enter a show name"
                            onChange={handleChange}
                        />
                        <input type="submit" value="Submit" />
                    </label>
                </form>
                :
                <label>
                    <input type="submit" value="BackToSearch" onClick={onClickSearch} />
                </label>




            }

            {Button ? null : <Result Submmited={showResult} />}

        </>
    );
}
export default Search;