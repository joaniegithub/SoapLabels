import { withStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import LabelsList from "SoapHelper/SoapLabels/LabelsList";
import LabelsPrintView from "SoapHelper/SoapLabels/LabelsPrintView";
import store from "SoapHelper/SoapLabels/store/";
import { useSoapLabels, useSettings } from "SoapHelper/SoapLabels/store/actions";
import Layout from "SoapHelper/layout/Layout";
import * as React from "react";
import { Provider } from "react-redux";

const styles = () => ({
	box: {
		width: "790px !important",
		margin: "0 auto",
		padding: "30px",
		boxSizing: "content-box",
	},
});

const Main = (props) => {
	const { classes } = props;
	const soapLabels = useSoapLabels();
	const settings = useSettings();

	return (
		<React.Fragment>
			<Layout>
				<Box className={classes.box}>
					{settings && soapLabels && (
						<React.Fragment>
							<LabelsList />
							<LabelsPrintView />
						</React.Fragment>
					)}
				</Box>
			</Layout>
			<div className="print">
				<LabelsPrintView />
			</div>
		</React.Fragment>
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
