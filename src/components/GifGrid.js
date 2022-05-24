import React from "react";

export const GifGrid = ({ category }) => {

  const getGifs = async () => {

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=4d9RcRiYP6oR9vwFcxKDZxYPvLIo8N04&limit=10&q=Rick'
    const response = await fetch(url);
    console.log(await response)
  }

  getGifs()

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}
