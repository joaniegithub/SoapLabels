import { StyledP } from "./Label";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useSettings } from "SoapHelper/SoapLabels/store/actions";
import * as React from "react";

const styles = () => ({
	labelGridItem: {
		padding: "12px",
		border: "1px dotted #eee",
		display: "inline-block",
		width: "100%",
		position: "relative",
		"@media print": {
			// boxShadow: "none",
			// borderWidth: "0 !important",
		},
	},
	labelSoapBrand: {
		fontFamily: "Shadows Into Light",
		fontSize: "20px",
		fontWeight: 500,
		lineHeight: "18px",
		margin: "0 0 8px 0",
	},
	labelSoapName: {
		fontFamily: "Shadows Into Light",
		fontSize: "24px",
		fontWeight: 700,
		lineHeight: "18px",
		margin: "0 0 10px",
	},
	labelSoapIngredients: {
		fontFamily: "Lato",
		fontSize: "8px",
		lineHeight: "10px",
		margin: "12px 0 0",
		fontWeight: "300",
	},
	labelSoapPhrase: {
		fontFamily: "Shadows Into Light",
		fontSize: "12px",
		lineHeight: "14px",
		margin: "6px 0 0",
	},
	labelSoapDate: {
		fontFamily: "Lato",
		fontSize: "9px",
		lineHeight: "14px",
		margin: 0,
		textAlign: "right",
	},
	labelSoapDateLeft: {
		fontFamily: "Lato",
		fontSize: "9px",
		lineHeight: "14px",
		margin: 0,
		textAlign: "center",
		writingMode: "vertical-rl",
		textOrientation: "mixed",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: "4px",
	},
});

const LabelColumns = (props) => {
	const {
		classes,
		demo: demoProps,
		soapLabel,
		styleBackgroundColor,
		brand,
		demo,
		dateOptions,
		soapDate,
		tmpSettings,
	} = props;

	const initialSettings = useSettings();
	const settings = tmpSettings || initialSettings;

	const { pt, pb, pl, pr } = settings.padding;
	const layoutNbPerRow = settings.layoutNbPerRow;
	const textAlignment = settings.textAlignment;
	const dateLeft = settings.dateLeft;

	const styleFontAlign = {
		fontFamily: settings.font,
		textAlign: textAlignment,
	};
	const styleAlign = { textAlign: textAlignment };

	return (
		<Grid
			item
			className={classes.labelGridItem}
			xs={12 / layoutNbPerRow}
			paddingTop={pt + "px"}
			paddingBottom={pb + "px"}
			paddingLeft={pl + "px"}
			paddingRight={pr + "px"}
			style={styleBackgroundColor}
		>
			{brand && (
				<StyledP style={styleAlign} className={classes.labelSoapBrand}>
					{brand}
				</StyledP>
			)}
			<StyledP style={styleFontAlign} className={classes.labelSoapName}>
				{soapLabel.name}
			</StyledP>
			<StyledP style={styleAlign} className={classes.labelSoapIngredients}>
				{soapLabel.ingredients}
			</StyledP>
			{soapLabel.phrase && (
				<StyledP style={styleAlign} className={classes.labelSoapPhrase}>
					{soapLabel.phrase}
				</StyledP>
			)}
			{soapLabel.date && (
				<StyledP className={dateLeft ? classes.labelSoapDateLeft : classes.labelSoapDate}>
					{soapDate}
				</StyledP>
			)}
		</Grid>
	);
};

export default withStyles(styles, { name: "LabelColumns" })(LabelColumns);
