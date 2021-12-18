import { withStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import LabelsList from "SoapHelper/SoapLabels/LabelsList";
import LabelsPrintView from "SoapHelper/SoapLabels/LabelsPrintView";
import store from "SoapHelper/SoapLabels/store/";
import {
	useSoapLabels,
	useSettings,
} from "SoapHelper/SoapLabels/store/actions";
import Layout from "SoapHelper/layout/Layout";
import * as React from "react";
import { Provider } from "react-redux";

const styles = () => ({
	containerPage: {
		width: "790px !important",
		margin: "0 auto",
		padding: "30px 0",
	},
});

const Main = (props) => {
	const { classes } = props;
	const soapLabels = useSoapLabels();
	const settings = useSettings();

	return (
		<Layout>
			<Box className={classes.containerPage}>
				{settings && soapLabels && (
					<React.Fragment>
						<LabelsList />
						<LabelsPrintView />
					</React.Fragment>
				)}
			</Box>
		</Layout>
	);
};

const SoapLabels = (props) => {
	const { classes } = props;
	return (
		<Provider store={store}>
			<Main {...props} />
		</Provider>
	);
};

export default withStyles(styles, { name: "SoapLabels" })(SoapLabels);
