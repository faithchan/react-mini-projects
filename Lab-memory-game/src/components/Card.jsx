import React, {useState} from 'react'


const Card = ({rank, suit, cardImage, backgroundImage}) => {
const [card, setCard]=useState(backgroundImage)

function flipCard(){
  setCard(cardImage)
}
    return (
      <>
      <img onClick={flipCard} src={card} alt=""
/>      </>
    )

}

export default Card
