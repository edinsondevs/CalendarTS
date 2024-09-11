import { uiSlice } from "../../../src/store";

describe('Pruebas en el uiSlice', () => {
    test('debe de retornar el estado por defecto', () => {
        expect(uiSlice.getInitialState().isDateModalOpen).toEqual(false);
    });

    test('debe de abrir y cerrar el modal', () => {
        
        //* LLAMO AL ESTADO INICIAL DEL SLICE
        let state = uiSlice.getInitialState();
        
        //* LLAMO AL REDUCER PARA ABRIR EL MODAL
        state = uiSlice.reducer(state, uiSlice.actions.onOpenDateModal());
        
        //* LLAMO AL REDUCER PARA CERRAR EL MODAL
        expect(state.isDateModalOpen).toBeTruthy();
        state = uiSlice.reducer(state, uiSlice.actions.onCloseDateModal());
        
        expect(state.isDateModalOpen).toBeFalsy(); 
    });
})