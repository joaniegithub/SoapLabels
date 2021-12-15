import {
	fattyAcids,
	properties,
	propertiesIodineINS,
} from "../SoapOilsCalculator";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";

const styles = () => ({
	main: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		paddingRight: "0px",
		paddingLeft: "20px",
	},
	tableStats: {
		listStyle: "none",
		width: "100%",
		margin: "0",
		padding: "0",
		borderTop: "#aaa solid 1px",
	},
	tableStatsRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		lineHeight: "18px",
		fontSize: "12px",
		padding: "0px 2px",
	},
	tableStatsRowEven: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		lineHeight: "18px",
		fontSize: "12px",
		padding: "0px 2px",
		backgroundColor: "#f8f8f8",
	},
	tableTitle: {
		fontWeight: 600,
		fontSize: "12px",
		padding: "0px 2px",
	},
});

const OilsStatsTable = (props) => {
	const { classes, selectedOil } = props;

	const getClss = (_index, _i) => {
		return index % 2 === 1
			? classes.tableStatsRowEven
			: classes.tableStatsRow;
	};
	let index = 0;
	return (
		<div className={classes.main}>
			<span className={classes.tableTitle}>
				{selectedOil ? selectedOil.name : ""}
			</span>
			<ul className={classes.tableStats}>
				{properties.map((property, i) => {
					index++;
					return (
						<li className={getClss(index, i)} key={index}>
							<span>{property}</span>
							<span>
								{selectedOil ? selectedOil[property] : ""}
							</span>
						</li>
					);
				})}
			</ul>
			<ul className={classes.tableStats}>
				{propertiesIodineINS.map((property, i) => {
					index++;
					return (
						<li className={getClss(index, i)} key={index}>
							<span>{property}</span>
							<span>
								{selectedOil ? selectedOil[property] : ""}
							</span>
						</li>
					);
				})}
			</ul>
			<ul className={classes.tableStats}>
				{fattyAcids.map((property, i) => {
					index++;
					return (
						<li className={getClss(index, i)} key={index}>
							<span>{property.replace("acid_type_", "")}</span>
							<span>
								{selectedOil
									? `${Math.round(
											selectedOil[property] * 100
									  )}%`
									: ""}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default withStyles(styles, { name: "OilsStatsTable" })(OilsStatsTable);
