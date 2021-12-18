import * as constants from "./constants";

export const defaultSettings = {
	font: "Shadows Into Light",
	brand: "",
	layout: "columns",
	layoutNbPerRow: 3,
	textAlignment: "left",
	leftColumnWidth: 0.65,
	seperatorWidth: 5,
	pagePadding: { pt: 36, pl: 36 },
	padding: {
		pt: 20,
		pb: 20,
		pl: 20,
		pr: 20,
		pl1: 50,
		pr1: 50,
		pl2: 10,
		pr2: 20,
	},
	translateFrench: false,
};

const defaultState = {
	name: "Soap Labels",
	soapLabels: [],
	settings: defaultSettings,
};

const reducer = (state = defaultState, { type, ...payload }) => {
	//action déconstruite = {type, name}
	// console.log(state, type, payload);

	switch (type) {
		case constants.SET_CURRENT_SOAP_LABEL:
			return {
				...state,
				currentSoapLabel: payload.currentSoapLabel,
			};

		case constants.ADD_SOAP_LABEL:
			return {
				...state,
				soapLabels: [...state.soapLabels, payload.soapLabel],
			};

		case constants.EDIT_CURRENT_SOAP_LABEL:
			const newState = {
				...state,
				soapLabels: state.soapLabels.map((soapLabel, i) => {
					return soapLabel.uid === payload.soapLabelToEdit.uid
						? { ...soapLabel, ...payload.soapLabelData }
						: soapLabel;
				}),
			};
			return newState;

		case constants.DELETE_CURRENT_SOAP_LABEL:
			return {
				...state,
				soapLabels: state.soapLabels.filter((soapLabel, i) =>
					soapLabel.uid === payload.soapLabelToDelete.uid
						? false
						: true
				),
			};

		case constants.EDIT_SETTINGS:
			return {
				...state,
				settings: { ...state.settings, ...payload.settings },
			};

		default:
			return state;
	}
}; // {reducer, startState, middleware}

export default reducer;
