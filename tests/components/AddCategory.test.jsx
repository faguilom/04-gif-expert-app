import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas del componente AddCategory', () => {
    
    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ () => {} } />);
        
        //Disparar un evento
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama'}});

        expect(input.value).toBe('Saitama');

        //screen.debug();

    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue}});

        screen.debug();

        fireEvent.submit(form);

        expect(input.value).toBe('');

        screen.debug();

        //Validamos que la función (que es un mock) ha sido llamada
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input es vacío', () => {

        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: inputValue}});

        screen.debug();

        fireEvent.submit(form);

        expect(onNewCategory).not.toBeCalled();
    })
})