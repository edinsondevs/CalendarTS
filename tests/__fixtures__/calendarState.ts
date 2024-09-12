export const events = [
	{
		id: "1",
		start: new Date("2021-10-15 13:30:00").toISOString().slice(0,10),
		end: new Date("2021-10-15 16:30:00").toISOString().slice(0,10),
		title: "Cumpleaños de Maribel",
		notes: "Hay que comprar el pastel",
	},
	{
		id: "2",
		start: new Date("2021-10-05 13:30:00").toISOString().slice(0, 10),
		end: new Date("2021-10-05 16:30:00").toISOString().slice(0, 10),
		title: "Cumpleaños de Juan Pablo",
		notes: "Hay que comprar el pastel",
	},
	{
		id: "3",
		start: new Date("2021-10-25 09:30:00").toISOString().slice(0,10),
		end: new Date("2021-10-25 16:30:00").toISOString().slice(0,10),
		title: "Cumpleaños de Cristian",
		notes: "Fiesta en su casa",
	},
];

export const onNewEvent = [{
		id: "4",
		start: new Date("2021-10-23 09:30:00").toISOString().slice(0,10),
		end: new Date("2021-10-23 16:30:00").toISOString().slice(0,10),
		title: "Previa del Cumpleaños de Cristian",
		notes: "Cordinar lo que se tiene que comprar ",
}]

export const onUpdateEventState = {
		id: "2",
		start: new Date("2021-10-23 09:30:00").toISOString().slice(0,10),
		end: new Date("2021-10-23 16:30:00").toISOString().slice(0,10),
		title: "EVENTO CANCELADO - Previa del Cumpleaños de Cristian",
		notes: "",
}

export const initialState = {
	isLoadingEvents: true,
	events: [] ,
	activeEvent: null,
};

export const loadEventsState = {
	isLoadingEvents: true,
	events: [...events] ,
	activeEvent: null,
};

export const calendarWithEventsState = {
	isLoadingEvents: false,
	events: [...events],
	activeEvent: null,
};

export const calendarWithActiveEventsState = {
	isLoadingEvents: false,
	events: [...events],
	activeEvent: {...events[0]},
};