import { withStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import OilsListChooser from "SoapHelper/SoapOilsCalculator/components/OilsListChooser";
import OilsStatsCharts from "SoapHelper/SoapOilsCalculator/components/OilsStatsCharts";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import { color } from "@mui/system";
import storeCalculator from "SoapHelper/SoapOilsCalculator/store/";
import { useOilsData } from "SoapHelper/SoapOilsCalculator/store/actions";
import Layout from "SoapHelper/layout/Layout";
import * as React from "react";
import { Provider } from "react-redux";

export const colors = [
	"#005d5d",
	"#FF7043",
	"#33b1ff",
	"#EC407A",
	"#f6c85f",
	"#46d39a",
	"#8b6ec3",
	"#a6d177",
	"#78909C",
	"#dd0000",
	"#004cab",
	"#efb4cd",
];

const pointOptions = { point: { size: 10 } };

const styles = () => ({
	chart: {
		paddingRight: "20px",
	},
	title: {
		whiteSpace: "pre",
	},
	box: {
		padding: "30px",
	},

	mainContainer: {
		display: "flex",
		flexDirection: "row",
	},
	// secondTitle,
});

export const fattyAcids = [
	"lauric",
	"myristic",
	"palmitic",
	"stearic",
	"ricinoleic",
	"oleic",
	"linoleic",
	"linolenic",
];

export const properties = [
	"hardness",
	"cleansing",
	"condition",
	"bubbly",
	"creamy",
	"longevity",
	"saturated",
	"unsat",
];
export const propertiesIodineINS = ["iodine", "ins"];

export const idealProperties = {
	hardness: [29, 41.5, 54],
	cleansing: [12, 17, 22],
	condition: [44, 56.5, 69],
	bubbly: [14, 30, 46],
	creamy: [16, 32, 48],
	longevity: [25, 35, 45],
	iodine: [41, 55.5, 70],
	ins: [136, 150.5, 165],
	saturated: [35, 40, 45],
	unsat: [55, 60, 65],
};

const Main = (props) => {
	const settings = true;
	const { classes } = props;
	const oilsData = useOilsData();
	// const [view, setView] = React.useState("fatty");

	const [selectedOils, setSelectedOils] = React.useState([]);
	const [checkedOilsNames, setCheckedOilsNames] = React.useState([
		"Olive Oil",
		"Coconut Oil, 76 deg",
		"Palm Oil",
		// "Castor Oil",
		// "Almond Oil, sweet",
		// "Safflower Oil",
		// "Canola Oil",
	]);

	// const handleChangeView = (event) => {
	// 	setView(event.target.value);
	// };

	React.useEffect(() => {
		// updateData();
	}, [checkedOilsNames]);

	const handlerOilSelect = (oils) => {
		setSelectedOils([...oils]);
	};

	return (
		<Layout>
			<Box className={classes.box}>
				{/*<div>
					<h2 className={classes.secondTitle}>Soap Oils</h2>
				</div>
				<FormControl component="fieldset">
					<FormLabel component="legend">View</FormLabel>
					<RadioGroup
						aria-label="view"
						defaultValue="fatty"
						name="radio-view-group"
						value={view}
						onChange={handleChangeView}
						row
					>
						<FormControlLabel
							value="fatty"
							control={<Radio />}
							label="Fatty"
						/>
						<FormControlLabel
							value="properties"
							control={<Radio />}
							label="Properties"
						/>
					</RadioGroup>
				</FormControl>*/}
				<div className={classes.mainContainer}>
					<OilsListChooser
						checkedOilsNames={checkedOilsNames}
						onOilSelect={handlerOilSelect}
					/>
					<OilsStatsCharts selectedOils={selectedOils} />
				</div>
			</Box>
		</Layout>
	);
};

const SoapOilsCalculator = (props) => {
	return (
		<Provider store={storeCalculator}>
			<Main {...props} />
		</Provider>
	);
};

export default withStyles(styles, { name: "SoapOilsCalculator" })(
	SoapOilsCalculator
);
