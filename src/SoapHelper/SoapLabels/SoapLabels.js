import LabelsList from "./LabelsList";
import LabelsPrintView from "./LabelsPrintView";
import "./SoapLabels.css";
import store from "./store/";
import { useSoapLabels, useSettings } from "./store/actions";
import { Box } from "@mui/material";
import * as React from "react";
import { Provider } from "react-redux";

export default function SoapLabels() {
	const soapLabels = useSoapLabels();
	const settings = useSettings();

	return (
		<Provider store={store}>
			<Box className="box">
				{settings && soapLabels && (
					<React.Fragment>
						<LabelsList />
						<LabelsPrintView />
					</React.Fragment>
				)}
			</Box>
		</Provider>
	);
}
