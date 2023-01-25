import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//Mock de un custom hook
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas sobre el componente GifGrid', () => {

    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        screen.debug();

        //const isLoading = screen.getByRole('heading', {level: 2});
        const isLoading = screen.getByText('Cargando...');

        expect(isLoading).toBeTruthy();
        expect(screen.getByText(category));

    });

    test('Debe mostrar items cuando se cargan las imágenes', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

        screen.debug();

        
    })

})