import { Calendar } from "primereact/calendar";
import { labelCalendarInterface } from "../../utils/interfaces/calendarInterfaces";
import { addLocale } from "primereact/api";
import React from "react";

export const CalendarComponent = (props: labelCalendarInterface) => {
	const {
		minDate,
		type = "start",
		initialDate,
		title,
		onChange, // propiedad para emitir la fecha seleccionada
	} = props;

	addLocale("es", {
		firstDayOfWeek: 1,
		dayNames: [
			"domingo",
			"lunes",
			"martes",
			"miércoles",
			"jueves",
			"viernes",
			"sábado",
		],
		dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
		dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
		monthNames: [
			"enero",
			"febrero",
			"marzo",
			"abril",
			"mayo",
			"junio",
			"julio",
			"agosto",
			"septiembre",
			"octubre",
			"noviembre",
			"diciembre",
		],
		monthNamesShort: [
			"ene",
			"feb",
			"mar",
			"abr",
			"may",
			"jun",
			"jul",
			"ago",
			"sep",
			"oct",
			"nov",
			"dic",
		],
		now: "Hoy",
		clear: "Limpiar",
	});

	const onselectionchange = (e: any) => {
		onChange(e.value);
	};
	
	return (
		<div className='flex-auto'>
			<label
				htmlFor='buttondisplay'
				className='font-bold block mb-2'>
				{title}
			</label>
			<Calendar
				showButtonBar
				locale='es'
				value={initialDate}
				name={type}
				id='buttondisplay'
				onChange={onselectionchange}
				showIcon
				showTime
				minDate={minDate}
				dateFormat='dd/mm/yy'
			/>
		</div>
	);
};
