import "./SoapOilsCalculator.css";
import OilsListChooser from "./components/OilsListChooser";
import OilsStatsCharts from "./components/OilsStatsCharts";
import { oilsData } from "./data/oilsData";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import { color } from "@mui/system";
import * as React from "react";

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

const demoStyles = () => ({
	chart: {
		paddingRight: "20px",
	},
	title: {
		whiteSpace: "pre",
	},
});

export const fattyAcids = [
	"acid_type_lauric",
	"acid_type_myristic",
	"acid_type_palmitic",
	"acid_type_stearic",
	"acid_type_ricinoleic",
	"acid_type_oleic",
	"acid_type_linoleic",
	"acid_type_linolenic",
];

export const properties = [
	"hardness",
	"cleansing",
	"condition",
	"bubbly",
	"creamy",
	"longevity",
	"sat",
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
	sat: [35, 40, 45],
	unsat: [55, 60, 65],
};

const SoapOilsCalculator = (props) => {
	const settings = true;
	const { classes } = props;
	const [view, setView] = React.useState("fatty");

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

	const handleChangeView = (event) => {
		setView(event.target.value);
	};

	React.useEffect(() => {
		// updateData();
	}, [checkedOilsNames]);

	console.log("--------------------------------");

	const handlerOilSelect = (oils) => {
		setSelectedOils([...oils]);
	};

	return (
		<Box className="box">
			<div>
				<h2 className="secondTitle">Soap Oils</h2>
			</div>
			{/*<FormControl component="fieldset">
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
			<div className="mainContainer">
				<OilsListChooser
					oilsData={oilsData}
					checkedOilsNames={checkedOilsNames}
					onOilSelect={handlerOilSelect}
				/>
				<OilsStatsCharts selectedOils={selectedOils} />
			</div>
		</Box>
	);
};

export default withStyles(demoStyles, { name: "SoapOilsCalculator" })(
	SoapOilsCalculator
);
