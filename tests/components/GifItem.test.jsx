import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"


describe('Pruebas sobre el GifItem', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/'

    test('Debe hacer match con el snapshot', () => { 

        const {container} = render(<GifItem title={title} url={url} />);

        //console.log(screen.getByAltText(title));

        expect(container).toMatchSnapshot();

     });

     test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title = {title} url = {url} />);

        //screen.debug();

        //console.log(screen.getByRole('img').src);
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
     })




})