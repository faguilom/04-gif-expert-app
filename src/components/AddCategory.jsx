import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        //Esta sentencia evita que se recargue toda la página al hacer submit
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        
        //setCategories(categorias => [inputValue, ...categorias]);
        onNewCategory(inputValue);

        //Borrar el input después de insertarlo en la lista
        setInputValue('');
    }


    return (
        /**
         * Para que el enter haga alguna acción, creamos un elemento form
         */
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value = {inputValue}
                /*onChange = {(event) => onInputChange(event)}*/
                /**
                 * No hace falta especificar el event, siempre pasa directamente a la función
                 */
                onChange = {onInputChange}
            />
        </form>
    )
}
