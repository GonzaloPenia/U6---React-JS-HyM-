import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

  const [Counter, setCounter] = useState(10)
  
  useEffect( () => {
    getGifs(category);
  }, [])
  

  return (
 
    <>  
        <h3>{category}</h3>
        <p>Hola mundo</p>    
    </>

  )

}