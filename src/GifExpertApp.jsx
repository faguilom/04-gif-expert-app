import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        /**
         * Múltiples posibilidades
         */
        //Esta es la recomendada, con el spread operator
        //setCategories([...categories, 'Los Simpson']);

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);

        /*
        setCategories(currentCategories =>
            currentCategories.concat('Los Simpson'));
        */

        //setCategories(categories.concat('Los Simpson'));

        //console.log(...categories);
    }

    
    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Los componentes pueden recibir props de cualquier tipo, en este 
                caso estamos mandando una función
            */}
            <AddCategory 
                //setCategories = {setCategories}
                onNewCategory = { value => onAddCategory(value)}
                
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/* <ol> */}
                {
                    categories.map((categoria) => {
                        //console.log(categoria);
                        return (<GifGrid key = {categoria} category = {categoria} />)
                    })
                    /**
                     * Código igual pero sin el return, no hace falta.
                     */
                    /*
                    categories.map((categoria) =>
                         (
                            <div>
                                <h3>{categoria}</h3>
                                <li key= {categoria}>{categoria}</li>
                            </div>

                        )
                    )
                    */
                    /**
                     * La key es oblitoria, y debe ser única
                     */
                    /*
                    categories.map((categoria) => {
                        return (
                            <div>
                                <h3>{categoria}</h3>
                                <li key= {categoria}>{categoria}</li>
                            </div>

                        );
                    })
                    */
                }

            {/* </ol> */}
        </>
    
    )
}
