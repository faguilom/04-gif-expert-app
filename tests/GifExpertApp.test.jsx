import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas del componente GifExpertApp', () => { 
    
    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />);

        //screen.debug();

        expect(container).toMatchSnapshot();
    });

    test('Debe contener un h1 con el texto GifExpertApp', () => {

        const { container } = render(<GifExpertApp />);

        //screen.debug();

        const titulo = screen.getByRole('heading', {level: 1});
        // console.log(titulo.innerHTML)

        expect(titulo.innerHTML).toBe('GifExpertApp');
    })


})