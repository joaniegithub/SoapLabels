import { colors } from "../SoapOilsCalculator";
import {
	fattyAcids,
	properties,
	propertiesIodineINS,
	idealProperties,
} from "../SoapOilsCalculator";
import "../SoapOilsCalculator.css";
import { oilsData } from "../data/oilsData";
import "./OilsStatsChartsProps";
import {
	format,
	Line,
	LinePoint,
	LineWithPoint,
	TitleText,
	ValueLabel,
	ValueLabelPercent,
} from "./OilsStatsChartsProps";
import OilsStatsTable from "./OilsStatsTable";
import {
	// 	ArgumentScale,
	EventTracker, // 	HoverState,
	Stack,
} from "@devexpress/dx-react-chart";
import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	LineSeries,
	AreaSeries,
	Title,
	Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
// import { scalePoint } from "d3-scale";
// import { curveCatmullRom, curveStep, line, stackOffsetExpand } from "d3-shape";
import * as React from "react";

const demoStyles = () => ({
	chartsContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	chartsRowContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "flex-start",
	},
	chartLarge: {
		paddingRight: "20px",
		width: "78%",
	},
	chart: {
		paddingRight: "0px",
		width: "22%",
	},
	table: {
		paddingRight: "0px",
		width: "22%",
	},
});

const getOil = (oilName, oilNameId) => {
	return { ...oilsData.filter((oil) => oil.name === oilName)[0], oilNameId };
};
const getPropertiesData = (
	propertiesList,
	selectedOilsList,
	invisibleValue,
	idealValues
) => {
	const data = propertiesList.map((property, i) => {
		const propertyData = { property: property.replace("acid_type_", "") };
		selectedOilsList.forEach((oil) => {
			if (property === "sat") {
				const val =
					(oil["acid_type_lauric"] +
						oil["acid_type_myristic"] +
						oil["acid_type_palmitic"] +
						oil["acid_type_stearic"]) *
					oil.p;
				propertyData[oil.oilNameId] = val === 0 ? 0.0001 : val;
			} else if (property == "unsat") {
				const val =
					(oil["acid_type_ricinoleic"] +
						oil["acid_type_oleic"] +
						oil["acid_type_linoleic"] +
						oil["acid_type_linolenic"]) *
					oil.p;
				propertyData[oil.oilNameId] = val === 0 ? 0.0001 : val;
			} else {
				propertyData[oil.oilNameId] =
					oil[property] === 0
						? 0.0001
						: (oil[property] * oil.p) / 100;
			}
		});
		if (idealValues) {
			propertyData["idealMin"] = idealValues[property][0];
			propertyData["ideal"] = idealValues[property][1];
			propertyData["idealMax"] = idealValues[property][2];
		}
		propertyData["invisible"] = i === 0 ? 0 : invisibleValue;
		return propertyData;
	});
	return data;
};

const combineAllData = (
	dataFattyAcidsTmp,
	dataPropertiesTmp,
	dataIodineINSProperties
) => {
	const allCombined = {
		...combineData(dataFattyAcidsTmp, "acid_type_"),
		...combineData(dataPropertiesTmp),
		...combineData(dataIodineINSProperties),
		name: "total",
	};
	return allCombined;
};
const combineData = (dataList, suffix = "") => {
	const combined = {};
	dataList.forEach((propObj) => {
		let propName;
		let propTotalValue = 0;
		for (const [key, value] of Object.entries(propObj)) {
			if (
				key !== "property" &&
				key !== "idealMin" &&
				key !== "ideal" &&
				key !== "idealMax" &&
				key !== "invisible"
			) {
				propTotalValue += value;
			} else if (key === "property") {
				propName = suffix + value;
			}
		}
		combined[propName] = Math.round(propTotalValue * 100) / 100;
	});
	return combined;
};

const getHoverIndex = (target) => (target ? target.point : -1);

const colorInvisible = "#fff";
const colorIdealInterval = "#bbb";
const colorIdeal = "#999";
const colorTotal = "#000";

const OilsStatsCharts = (props) => {
	const { classes, selectedOils } = props;

	const [doRender, setDoRender] = React.useState(false);
	// const [target, setTarget] = React.useState(null);
	const [stacksproperties, setstacksproperties] = React.useState(null);
	const [stacksfattyAcids, setstacksfattyAcids] = React.useState(null);
	const [selectedOil, setselectedOil] = React.useState(null);
	const [selectedOilsId, setselectedOilsId] = React.useState(null);
	const [computedSelectedOils, setcomputedSelectedOils] =
		React.useState(null);
	const [dataFattyAcids, setdataFattyAcids] = React.useState(null);
	const [dataProperties, setdataProperties] = React.useState(null);
	const [dataIodineINSProperties, setdataIodineINSProperties] =
		React.useState(null);

	const chartFattyAcidsTitle = `Fatty Acids Profile Per Oil`;
	const chartPropertiesTitle = `Properties Per Oil`;
	// const chartTitle =
	// 	view === "fatty" ? chartFattyAcidsTitle : chartPropertiesTitle;
	// const chartData = view === "fatty" ? dataFatty : dataProperties;
	const stacksIodineINS = [{ series: ["idealMin", "ideal", "idealMax"] }];

	const updateData = () => {
		const _selectedOilsId = selectedOils.map((oil) => {
			const oilNameId = oil.name
				.toLowerCase()
				.replace(/[^a-zA-Z0-9]+/g, "_");
			oil.oilNameId = oilNameId;
			return oilNameId;
		});
		console.log(_selectedOilsId);
		setselectedOilsId(_selectedOilsId);
		const dataFattyAcidsTmp = getPropertiesData(
			fattyAcids,
			selectedOils,
			1.05
		);
		const dataPropertiesTmp = getPropertiesData(
			properties,
			selectedOils,
			105,
			idealProperties
		);
		const dataIodineINSProperties = getPropertiesData(
			propertiesIodineINS,
			selectedOils,
			185,
			idealProperties
		);
		const selectedOilTotal = combineAllData(
			dataFattyAcidsTmp,
			dataPropertiesTmp,
			dataIodineINSProperties
		);
		console.log(selectedOilTotal);

		setdataFattyAcids(dataFattyAcidsTmp);
		setdataProperties(dataPropertiesTmp);
		setdataIodineINSProperties(dataIodineINSProperties);
		if (selectedOils.length > 0) {
			const oilsNames = selectedOils.map((oil) => oil.name);
			setstacksfattyAcids([{ series: oilsNames }]);
			setstacksproperties([{ series: oilsNames }]);
			if (selectedOils.length === 1) {
				setselectedOil(selectedOils[0]);
			} else {
				setselectedOil(selectedOilTotal);
			}
		} else {
			setstacksfattyAcids(null);
			setstacksproperties(null);
		}
		setcomputedSelectedOils(selectedOils);
		setDoRender(true);
	};

	React.useEffect(() => {
		setDoRender(false);
		setcomputedSelectedOils(null);
		console.log("selectedOils changed");
		if (selectedOils && selectedOils.length) {
			updateData();
		}
	}, [selectedOils]);

	if (
		!doRender ||
		!dataFattyAcids ||
		!dataProperties ||
		!dataIodineINSProperties ||
		computedSelectedOils !== selectedOils
	) {
		return null;
	}
	console.log(dataFattyAcids);
	console.log(dataProperties);
	// console.log(stacksIodineINS);
	//const formatTooltip = format('.1f');

	const TooltipContent = ({ data, text, style, ...props }) => {
		return <span>{Math.floor(text * 100) / 100}</span>;
	};

	return (
		<React.Fragment>
			{doRender && (
				<div className={classes.chartsContainer}>
					<div className={classes.chartsRowContainer}>
						<Chart
							data={dataProperties}
							className={classes.chartLarge}
							height="360"
						>
							<ArgumentAxis tickFormat={format} />
							<ValueAxis labelComponent={ValueLabelPercent} />
							<LineSeries
								key="invisible"
								name="invisible"
								valueField="invisible"
								argumentField="property"
								seriesComponent={LineWithPoint}
								color={colorInvisible}
							/>
							<AreaSeries
								key="idealMax"
								name="idealMax"
								valueField="idealMax"
								argumentField="property"
								color={colorIdealInterval}
							/>
							<AreaSeries
								key="idealMin"
								name="idealMin"
								valueField="idealMin"
								argumentField="property"
								color="#fff"
							/>
							<LineSeries
								key="ideal"
								name="ideal"
								valueField="ideal"
								argumentField="property"
								color={colorIdeal}
								seriesComponent={Line}
							/>
							{computedSelectedOils.map((oil, id) => {
								const oilValue = selectedOilsId[id];
								return (
									<AreaSeries
										key={oil.name}
										name={oil.name}
										valueField={oilValue}
										argumentField="property"
										// seriesComponent={Line}
										// pointComponent={LinePoint}
										color={colors[id % colors.length]}
									/>
								);
							})}
							<Title
								text={chartPropertiesTitle}
								textComponent={TitleText}
							/>
							<EventTracker />
							<Tooltip contentComponent={TooltipContent} />
							<Stack stacks={stacksproperties} />
						</Chart>
						<Chart
							data={dataIodineINSProperties}
							className={classes.chart}
							height="360"
						>
							<ArgumentAxis tickFormat={format} />
							<ValueAxis labelComponent={ValueLabelPercent} />
							<LineSeries
								key="invisible"
								name="invisible"
								valueField="invisible"
								argumentField="property"
								seriesComponent={LineWithPoint}
								color={colorInvisible}
							/>
							<LineSeries
								key="ideal"
								name="ideal"
								valueField="ideal"
								argumentField="property"
								seriesComponent={LineWithPoint}
								color={colorIdeal}
							/>

							{computedSelectedOils.map((oil, id) => {
								const oilValue = selectedOilsId[id];
								return (
									<AreaSeries
										key={oil.name}
										name={oil.name}
										valueField={oilValue}
										argumentField="property"
										//seriesComponent={LineWithPoint}
										color={colors[id % colors.length]}
									/>
								);
							})}
							<EventTracker />
							<Tooltip contentComponent={TooltipContent} />
							<Stack stacks={stacksproperties} />
						</Chart>
					</div>
					<div className={classes.chartsRowContainer}>
						<Chart
							data={dataFattyAcids}
							className={classes.chartLarge}
							height="360"
							min={0}
							max={100}
						>
							<ArgumentAxis tickFormat={format} />
							<ValueAxis labelComponent={ValueLabel} />
							<LineSeries
								key="invisible"
								name="invisible"
								valueField="invisible"
								argumentField="property"
								seriesComponent={LineWithPoint}
								color={colorInvisible}
							/>
							{computedSelectedOils.map((oil, id) => {
								const oilValue = selectedOilsId[id];
								return (
									<AreaSeries
										key={oil.name}
										name={oil.name}
										valueField={oilValue}
										argumentField="property"
										color={colors[id % colors.length]}
									/>
								);
							})}
							<Title
								text={chartFattyAcidsTitle}
								textComponent={TitleText}
							/>
							<EventTracker />
							<Tooltip contentComponent={TooltipContent} />
							<Stack stacks={stacksfattyAcids} />
						</Chart>
						<div className={classes.table}>
							<OilsStatsTable selectedOil={selectedOil} />
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default withStyles(demoStyles, { name: "OilsStatsCharts" })(
	OilsStatsCharts
);
