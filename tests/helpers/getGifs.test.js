process.env.NODE_TLS_REJECT_UNAUTHORIZED=0;
import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba sobre el módulo getGifs', () => {

    test('Debe devolver los gifs de una categoría', async () => {

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);

    });


})