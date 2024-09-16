import { useState } from "react";

const useToggle = (initialState: boolean = false) => {
	const [state, setState] = useState<boolean>(initialState);

	const toggle = () => {
		setState(!state);
	};

	return {
		state,
		toggle,
	};
};

export default useToggle;