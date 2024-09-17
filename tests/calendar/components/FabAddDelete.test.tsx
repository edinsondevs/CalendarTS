import { render } from "@testing-library/react";
import { FabAddDelete } from "../../../src/calendar/components/FabAddDelete";

describe('testeando el <FabAddDelete/>', () => {
    
    test('should debe de mostrar el <FabAddDelete/>', () => {
        render(<FabAddDelete/>);
    });
})