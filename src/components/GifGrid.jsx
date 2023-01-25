import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

import { PropTypes} from 'prop-types';


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({isLoading});

    /**
     * Código movido al custom hook useFetchGifs
     */
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();        
    // }, []);   
  
    return (
        <>
            <h3>{category}</h3>

            {isLoading && <h2>Cargando...</h2>}
            
            <div className="card-grid">
                {
                    /**
                     * Se puede usar desestructuración en las funciones de flecha
                     */
                    //images.map(({id, title}) => {
                    images.map((image) => {
                        return <GifItem 
                                    key={image.id}
                                    {...image} />
                        //return <li key = {id}>{title}</li>
                    })

                }


            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
