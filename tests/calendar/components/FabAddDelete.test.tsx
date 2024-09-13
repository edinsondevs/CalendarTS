import { render, screen } from "@testing-library/react";
import { FabAddDelete } from "../../../src/calendar/components/FabAddDelete";

describe('pruebas en el FabAddDelete', () => {
    
    test('debe de mostrar el componente', () => {
        
        render(<FabAddDelete />);
        screen.debug();

    });
})