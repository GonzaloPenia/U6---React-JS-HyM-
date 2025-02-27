import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto','One Piece']);

    const onAddCategory = (NewCategory) => {
        categories.push(NewCategory);
        //setCategories(cat => [...cat, 'Dragon Ball']);
    }

  return (
    <>  
        
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={event => onAddCategory(event)} 
        />

        <ol>
            {categories.map(category => {
                return <li key={category}> {category} </li>
            })}
        </ol>
    </>
  )
}
