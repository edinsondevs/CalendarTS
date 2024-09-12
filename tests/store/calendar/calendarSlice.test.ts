import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store";
import { calendarWithActiveEventsState, calendarWithEventsState, events, initialState, loadEventsState, onNewEvent, onUpdateEventState } from "../../__fixtures__/calendarState";

describe('Pruebas en el calendarSlice', () => {
    
    test('debe de retornar el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState)
    });

    test('debe de activar el evento activo', () => {
        
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent(events[0]));
        expect(state.activeEvent).toEqual(events[0])
    });

    test('debe de agregar un nuevo evento', () => {
        //* Se llama al reducer con el estado inicial y la accion de agregar un nuevo evento con el evento mockeado en el primer elemento del arreglo
		const state = calendarSlice.reducer(calendarWithEventsState,onAddNewEvent(onNewEvent));
		
        // * Se espera que el activeEvent sea nulo
		expect(state.activeEvent).toEqual(null);
        // * Se espera que el evento agregado este al final del arreglo
		expect(state.events[state.events.length - 1]).toEqual(onNewEvent);
		expect(state.events).toEqual([...events, onNewEvent]); 
	});

    test('se debe modificar el evento', () => {
        //* Se llama al reducer con el evento activo y la accion de modificar el nuevo evento modificado mockeado
		const state = calendarSlice.reducer(calendarWithEventsState,onUpdateEvent(onUpdateEventState));
		
        // * Se espera que el activeEvent sea nulo
		expect(state.activeEvent).toEqual(null);
        // * Se espera que el evento agregado este al final del arreglo
        expect(state.events).toContain(onUpdateEventState); 
	});

    test('se debe eliminar el evento enviado', () => {
        //* Se llama al reducer con el evento activo y la accion de eliminar el evento
		const state = calendarSlice.reducer(calendarWithActiveEventsState ,onDeleteEvent());
		
        // * Se espera que el activeEvent sea nulo
		expect(state.activeEvent).toBe(null);
        // * Se espera que el evento haya sido eliminado del state
        expect(state.events).not.toContain({id: '1'}); 
	});

    test('se debe establecer los eventos', () => {
        //* Se llama al reducer con el evento activo y la accion de cargar eventos sin eventos
		const state = calendarSlice.reducer(initialState, onLoadEvents([]));
        
        // * Se espera que el isLoadingEvents sea false
		expect(state.isLoadingEvents).toEqual(false);
		expect(state.activeEvent).toEqual(null);
		expect(state.events).toEqual([]);

	});

    test('se debe establecer los eventos', () => {
        //* Se llama al reducer con el evento activo y la accion de cargar eventos con eventos
		const state = calendarSlice.reducer(initialState, onLoadEvents(events));
        
        // * Se espera que el isLoadingEvents sea false
		expect(state.isLoadingEvents).toEqual(false);
		expect(state.activeEvent).toEqual(null);
		expect(state.events).toEqual(events);

	});

    test('se debe establecer los eventos', () => {
        //* Se llama al reducer con el evento activo y la accion de cargar eventos con eventos
		const state = calendarSlice.reducer(calendarWithEventsState, onLoadEvents(onNewEvent));
        
        // * Se espera que el el evento agregado exista en el array de eventos
		expect(state.events).toContain(onNewEvent[0]); 

	});

    test('se debe limpiar todo el store', () => {
        //* Se llama al reducer con el evento activo y la accion de cerrar sesion
		const state = calendarSlice.reducer(calendarWithActiveEventsState , onLogoutCalendar());
		
        // * Se espera que se limpien todos los estados del store
        expect(state).toEqual(initialState);

	});
})