import { StyledP } from "./Label";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useSettings } from "SoapHelper/SoapLabels/store/actions";
import * as React from "react";

const styles = () => ({
	labelWideRowGridItem: {
		padding: 0,
		border: "1px dotted #eee",
		display: "flex",
		alignItems: "center",
		width: "100%",
	},
	labelWideRowGridItemLeft: {
		display: "inline-block",
		width: "100%",
		paddingRight: "7px",
	},
	labelWideRowGridItemRight: {
		display: "inline-block",
		width: "100%",
		paddingLeft: "7px",
	},
	labelSoapName: {
		fontFamily: "Shadows Into Light",
		fontSize: "32px",
		lineHeight: "28px",
		margin: "0 0 10px",
		"&:last-child": {
			marginBottom: 0,
		},
	},
	labelSoapIngredients: {
		fontFamily: "Lato",
		fontSize: "12px",
		lineHeight: "16px",
		margin: "10px 0 10px",
		fontWeight: "300",
	},
	labelSoapBrand: {
		fontFamily: "Shadows Into Light",
		fontSize: "18px",
		lineHeight: "18px",
		margin: "0 0 10px",
		"&:last-child": {
			marginBottom: 0,
		},
	},
	labelSoapPhrase: {
		fontFamily: "Shadows Into Light",
		fontSize: "14px",
		lineHeight: "16px",
		margin: "10px 0 0",
		"&:last-child": {
			marginBottom: 0,
		},
	},
	labelSoapDate: {
		fontFamily: "Lato",
		fontSize: "10px",
		lineHeight: "14px",
		margin: "10px 0 0",
	},
});

const LabelWide = (props) => {
	const settings = useSettings();

	const {
		classes,
		demo: demoProps,
		soapLabel,
		styleBackgroundColor,
		brand,
		demo,
		dateOptions,
		soapDate,
	} = props;

	const { pt, pb, pl1, pr1, pl2, pr2 } = settings.padding;
	const leftColumnWidth = settings.leftColumnWidth;
	const seperatorWidth = settings.seperatorWidth;

	const styleFont = { fontFamily: settings.font };

	return (
		<Grid
			xs={12}
			item
			className={classes.labelWideRowGridItem}
			paddingTop={pt + "px"}
			paddingBottom={pb + "px"}
			style={styleBackgroundColor}
		>
			<Grid
				item
				xs={12 * leftColumnWidth}
				paddingLeft={pl1 + "px"}
				paddingRight={pr1 + "px"}
				className={classes.labelWideRowGridItemLeft}
			>
				<StyledP className={classes.labelWideRowSoapIngredients}>
					{soapLabel.ingredients}
				</StyledP>
				{soapLabel.date && (
					<StyledP className={classes.labelWideRowSoapDate}>
						{soapDate}
					</StyledP>
				)}
			</Grid>
			<Grid
				item
				xs={12 * (1 - leftColumnWidth)}
				paddingLeft={pl2 + "px"}
				paddingRight={pr2 + "px"}
				className={classes.labelWideRowGridItemRight}
				style={{ borderLeft: `${seperatorWidth}px solid #000` }}
			>
				{brand && (
					<StyledP className={classes.labelWideRowSoapBrand}>
						{brand}
					</StyledP>
				)}
				<StyledP
					style={styleFont}
					className={classes.labelWideRowSoapName}
				>
					{soapLabel.name}
				</StyledP>
				{soapLabel.phrase && (
					<StyledP className={classes.labelWideRowSoapPhrase}>
						{soapLabel.phrase}
					</StyledP>
				)}
			</Grid>
		</Grid>
	);
};

export default withStyles(styles, { name: "LabelWide" })(LabelWide);
