import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const onAddCategory = (NewCategory) => {

        if ( categories.includes(NewCategory) ) return;

        //categories.push(NewCategory);
        setCategories([NewCategory,...categories]);

    }

  return (
    <>  
        
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ event => onAddCategory(event)} 
        />

        {
            categories.map( (category) =>(
                <GifGrid 
                    key={category} 
                    category={category}
                    />
            ))
        }

    </>
  )
}
