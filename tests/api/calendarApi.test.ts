import { localStorageMock } from "../helpers/localStorageMock";

Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
});

import calendarApi from "../../src/api/calendarApi";

describe("Pruebas en el calendarApi", () => {
	test("debe de tener la configuracion por defecto en la creacion de la instancia de axios", () => {
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
	});

    test.skip("debe de tener el x-token en el header", async () => {
        localStorage.setItem("token","ABC-123");
        
        const res = await calendarApi.get("/auth",);
        console.log(res.config.headers["x-token"]);
    });
});
