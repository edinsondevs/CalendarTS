import { useState } from "react";

const useDisabledOption = (initialState: boolean) => {
	const [state, setState] = useState<boolean>(initialState);

    const changeOption = (option: boolean) => {
		setState(option);
	};

	return {
		state,
		changeOption,
	};
};

export default useDisabledOption;