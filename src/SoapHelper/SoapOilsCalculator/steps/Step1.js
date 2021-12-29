import { withStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import Layout from "SoapHelper/layout/Layout";
import * as React from "react";

const styles = () => ({
	mainContainer: {
		display: "flex",
		flexDirection: "row",
	},
});

const Step1 = (props) => {
	const { classes } = props;

	// const [selectedOils, setSelectedOils] = React.useState([]);

	// React.useEffect(() => {
	// 	updateData();
	// }, []);

	// const handlerOilSelect = (oils) => {
	// 	setSelectedOils([...oils]);
	// };

	return <div className={classes.mainContainer}>yo step 1</div>;
};

export default withStyles(styles, { name: "Step1" })(Step1);
