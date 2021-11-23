import React from "react";
import Results from "./Results";

function Result(props)
{
 
const movieResults = props.Submmited.map((results,index) =>
{
   return <Results key={index} name={results.show.name} image={results.show.image}/>
})



return(
    <>
    {movieResults}
    </>
)
 
}
export default Result;