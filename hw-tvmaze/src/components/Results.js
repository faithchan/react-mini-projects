import React from "react";



function Results(props)
{
    return(
        <div className="Results">
            <div>{props.name}</div>
            <img src={props.image === null ? "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081": props.image.medium} alt="" />
        </div>
    )
}


export default Results