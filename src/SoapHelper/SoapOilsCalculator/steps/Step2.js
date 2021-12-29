import { withStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import OilsListChooser from "SoapHelper/SoapOilsCalculator/components/OilsListChooser";
import OilsStatsCharts from "SoapHelper/SoapOilsCalculator/components/OilsStatsCharts";
import Layout from "SoapHelper/layout/Layout";
import * as React from "react";

const styles = () => ({
	mainContainer: {
		display: "flex",
		flexDirection: "row",
	},
});

const Step2 = (props) => {
	const { classes } = props;

	const [selectedOils, setSelectedOils] = React.useState([]);
	const [checkedOilsNames, setCheckedOilsNames] = React.useState([
		"Olive Oil",
		"Coconut Oil, 76 deg",
		"Palm Oil",
		// "Castor Oil",
		// "Almond Oil, sweet",
		// "Safflower Oil",
		// "Canola Oil",
	]); // todo: mettre une liste vide et un message indiquant de choisir une huile.

	// React.useEffect(() => {
	// 	updateData();
	// }, [checkedOilsNames]);

	const handlerOilSelect = (oils) => {
		setSelectedOils([...oils]);
	};

	return (
		<div className={classes.mainContainer}>
			<OilsListChooser
				checkedOilsNames={checkedOilsNames}
				onOilSelect={handlerOilSelect}
			/>
			<OilsStatsCharts selectedOils={selectedOils} />
		</div>
	);
};

export default withStyles(styles, { name: "Step2" })(Step2);
