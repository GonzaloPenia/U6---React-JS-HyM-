import { useState } from "react"


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('One Piece');

    const onInputChange = ({target}) => {
      setinputValue(target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim().length <= 1) return;

      setCategories(categories =>[inputValue, ...categories]);      
      setinputValue('');
      onNewCategory( inputValue.trim() );
    }

  return (

    <form onSubmit={ (event) => onSubmit(event) }>

      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        />

    </form>
  )
}
