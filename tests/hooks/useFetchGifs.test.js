import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe devolver el estado inicial', () => {

        const { result } = renderHook(() => {
            return useFetchGifs('One Punch')
        });

        const {images, isLoading} = result.current;

        console.log(isLoading);

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

     });

     test('Debe retornar un arreglo de imágenes y isLoading en false', async () => {

        const { result } = renderHook(() => {
            return useFetchGifs('One Punch')
        });

        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();
     })

});