import { render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/calendar";
// import { Navbar } from "../../../src/calendar/components/Navbar";
// import { FabAddDelete } from "../../../src/calendar/components/FabAddDelete";

describe('pruebas en el FabAddDelete', () => {
    
    test('debe de mostrar el componente', () => {
        
        // render(<FabAddDelete />);
        render(
            <Navbar />
        )
        screen.debug();

    });
})