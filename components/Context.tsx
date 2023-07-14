import { createContext, useState } from 'react';

export const ContextStates = createContext(null);

const Context = ({ children }: any) => {
	const [state, setState] = useState({
		modal: {
			status: false,
			movieId: null,
		},
	});

	return (
		//@ts-ignore
		<ContextStates.Provider value={{ state, setState }}>
			{children}
		</ContextStates.Provider>
	);
};

export default Context;
