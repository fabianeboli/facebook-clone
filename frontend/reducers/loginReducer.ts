enum loginAction {
	UPDATE = "UPDATE",
	CLEAR = "CLEAR",
}

const initialState = {
	id: "",
};

export const updateId = (id: string) => {
	return {
		type: loginAction.UPDATE,
		id,
	};
};

export const clearId = () => {
	return {
		type: loginAction.CLEAR,
	};
};

export const loginReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case loginAction.UPDATE: {
			return {
				...state,
				state: state.id = action.id,
			};
		}
		case loginAction.CLEAR: {
			return {
				...state,
				state: state = initialState,
			};
		}
		default:
			return state;
	}
};
