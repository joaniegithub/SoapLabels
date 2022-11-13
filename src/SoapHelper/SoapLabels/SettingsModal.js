import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
// import BackspaceIcon from '@mui/icons-material/Backspace';
// import SaveIcon from '@mui/icons-material/Save';
import { Slider } from "@mui/material";
import Label from "SoapHelper/SoapLabels/labelLayouts/Label";
import { editSettings, useSettings } from "SoapHelper/SoapLabels/store/actions";
import {
	rightAbsoluteContainer,
	secondTitle,
	gridItemClose,
	modalBox,
} from "SoapHelper/styles/styles";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const styles = () => ({
	gridItemClose,
	secondTitle,
	// wrapperForAbsolute: {
	// 	...wrapperForAbsolute,
	// 	...noPrint,
	// },
	modalBox,
	gridLayoutsContainer: {
		maxWidth: "initial !important",
	},
	gridItemLayout: {
		marginTop: "10px !importan",
	},
});

const sliderStyle = { marginLeft: 12, marginRight: 12, width: "auto" };
const sliderPaddingProperties = {
	min: 10,
	max: 150,
	// marks: [{value: 10, label: '10'}, {value: 100, label: '100'}]
};

const SettingsModal = (props) => {
	const dispatch = useDispatch();
	const initialSettings = useSettings();

	const { classes, onCloseSettingsModal, settingsModalOpen } = props;

	const [settings, setSettings] = React.useState(JSON.parse(JSON.stringify(initialSettings)));

	const [brand, setBrand] = React.useState("");
	const [brandError /*, setBrandError*/] = React.useState(false);
	const [font, setFont] = React.useState("");
	const [fontError /*, setFontError*/] = React.useState(false);
	const [pagePadding, setPagePadding] = React.useState({ pt: 36, pl: 36 });
	const [padding, setPadding] = React.useState({
		pt: 20,
		pb: 20,
		pl: 20,
		pr: 20,
		pl1: 50,
		pr1: 50,
		pl2: 10,
		pr2: 20,
	});

	const [layout, setLayout] = React.useState("");
	const [isLayoutColumn, setIsLayoutColumn] = React.useState("");
	const [layoutNbPerRow, setLayoutNbPerRow] = React.useState("");
	const [layoutNbPerRowArray, setLayoutNbPerRowArray] = React.useState([]);
	const [textAlignment, setTextAlignment] = React.useState("");
	const [leftColumnWidth, setLeftColumnWidth] = React.useState(0);
	const [seperatorWidth, setSeperatorWidth] = React.useState(0);
	const [dateLeft, setDateLeft] = React.useState(false);

	const handleBrandChange = (event) => {
		setBrand(event.target.value);
	};
	const handleFontChange = (event) => {
		setFont(event.target.value);
	};
	const handleLayoutChange = (event) => {
		setLayout(event.target.value);
		setIsLayoutColumn(event.target.value === "columns");
	};
	const handlePagePaddingChange = (value, property) => {
		const newPagePadding = { ...pagePadding };
		newPagePadding[property] = value;
		setPagePadding(newPagePadding);
	};
	const handlePaddingChange = (value, property) => {
		const newPadding = { ...padding };
		newPadding[property] = value;
		setPadding(newPadding);
	};
	const handleLeftColumnWidthChange = (event) => {
		setLeftColumnWidth(event.target.value / 100);
	};
	const handleSeperatorWidthChange = (event) => {
		setSeperatorWidth(event.target.value);
	};
	const handleTextAlignmentChange = (event) => {
		setTextAlignment(event.target.value);
	};
	const handleDateLeftChange = (event) => {
		setDateLeft(!!event.target.checked);
	};
	const handleLayoutNbPerRowChange = (event) => {
		const val = parseInt(event.target.value);
		const valid = val >= 2 && val <= 6;
		if (valid) {
			setLayoutNbPerRow(val);
			setLayoutNbPerRowArray([...Array(val).keys()]);
		}
	};

	const demoSoap = {
		name: "Soap Name",
		ingredients:
			"Ingredients: water, coconut oil, palm oil, lye, avocado oil, canola oil, castor oil, olive oil, safflower oil, cocoa butter, fragrance(s), colorant(s).",
		phrase: "Some catchy phrase",
		date: new Date(),
	};

	const updateSettings = () => {
		const settingsData = {
			brand,
			font,
			layout,
			pagePadding,
			padding,
			leftColumnWidth,
			seperatorWidth,
			textAlignment,
			layoutNbPerRow,
			dateLeft,
		};
		setSettings(settingsData);
	};

	useEffect(() => {
		if (initialSettings) {
			setBrand(settings.brand);
			setFont(settings.font);
			setPagePadding(settings.pagePadding);
			setPadding(settings.padding);
			setLayout(settings.layout);
			setIsLayoutColumn(settings.layout === "columns");
			setLayoutNbPerRow(settings.layoutNbPerRow);
			setDateLeft(settings.dateLeft);
			setLayoutNbPerRowArray([...Array(settings.layoutNbPerRow).keys()]);
			setTextAlignment(settings.leftColumnWidth);
			setLeftColumnWidth(settings.leftColumnWidth);
			setSeperatorWidth(settings.seperatorWidth);
		}
	}, [initialSettings]);

	useEffect(() => {
		updateSettings();
	}, [
		brand,
		font,
		layout,
		pagePadding,
		padding,
		leftColumnWidth,
		seperatorWidth,
		textAlignment,
		layoutNbPerRow,
		dateLeft,
	]);

	const handleClose = () => {
		dispatch(editSettings(settings));
		onCloseSettingsModal();
	};

	const sliderValueLabelDisplay = "auto";

	const valueLabelFormatInPx = (x) => `${x}px`;
	const valueLabelFormatInPercentage = (x) => `${x}%`;

	const commonFields = (smallLabelPadding = true) => {
		return (
			<React.Fragment>
				<Grid item xs={6}>
					<FormControl fullWidth>
						<FormLabel component="legend">Page Top/Bottom Padding</FormLabel>
						<Slider
							id="pagePadding-top"
							label="Page Top Padding"
							size="small"
							value={parseInt(pagePadding.pt)}
							onChange={(e) => handlePagePaddingChange(e.target.value, "pt")}
							valueLabelDisplay={sliderValueLabelDisplay}
							{...sliderPaddingProperties}
							style={sliderStyle}
							valueLabelFormat={valueLabelFormatInPx}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<FormControl fullWidth>
						<FormLabel component="legend">Page Left/Right Padding</FormLabel>
						<Slider
							id="pagePadding-bottom"
							label="Page Bottom Padding"
							size="small"
							value={parseInt(pagePadding.pl)}
							onChange={(e) => handlePagePaddingChange(e.target.value, "pl")}
							valueLabelDisplay={sliderValueLabelDisplay}
							{...sliderPaddingProperties}
							style={sliderStyle}
							valueLabelFormat={valueLabelFormatInPx}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="font"
						label="Font"
						helperText="Has to exist on your computer"
						size="small"
						value={font}
						error={fontError}
						onChange={handleFontChange}
						style={{ width: "100%" }}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="soap-brand"
						label="Soap Brand"
						size="small"
						helperText=""
						value={brand}
						error={brandError}
						onChange={handleBrandChange}
						style={{ width: "100%" }}
					/>
				</Grid>
				<Grid item xs={smallLabelPadding ? 3 : 6}>
					<FormControl fullWidth>
						<FormLabel component="legend">Label Top Padding</FormLabel>
						<Slider
							id="padding-top"
							label="Top padding"
							size="small"
							value={parseInt(padding.pt)}
							onChange={(e) => handlePaddingChange(e.target.value, "pt")}
							valueLabelDisplay={sliderValueLabelDisplay}
							{...sliderPaddingProperties}
							style={sliderStyle}
							valueLabelFormat={valueLabelFormatInPx}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={smallLabelPadding ? 3 : 6}>
					<FormControl fullWidth>
						<FormLabel component="legend">Label Bottom Padding</FormLabel>
						<Slider
							id="padding-bottom"
							label="Bottom Padding"
							size="small"
							value={parseInt(padding.pb)}
							onChange={(e) => handlePaddingChange(e.target.value, "pb")}
							valueLabelDisplay={sliderValueLabelDisplay}
							{...sliderPaddingProperties}
							style={sliderStyle}
							valueLabelFormat={valueLabelFormatInPx}
						/>
					</FormControl>
				</Grid>
			</React.Fragment>
		);
	};

	return (
		<Dialog open={settingsModalOpen} scroll="body" maxWidth={"1000px"}>
			<DialogContent dividers={false}>
				<Box className={classes.modalBox}>
					<FormControl fullWidth={true} component="form">
						<RadioGroup
							aria-label="layout"
							value={layout}
							onChange={handleLayoutChange}
							name="radio-buttons-group"
						>
							<Grid container spacing={2} className={classes.gridForm}>
								<Grid item xs={6}>
									<h2 className={classes.secondTitle}>Settings</h2>
								</Grid>
								<Grid item xs={6} className={classes.gridItemClose}>
									<IconButton onClick={handleClose}>
										<CloseIcon />
									</IconButton>
								</Grid>
								<Grid item xs={12}>
									<Grid
										container
										spacing={2}
										className={classes.gridLayoutsContainer}
									>
										<Grid item xs={12}>
											<FormControlLabel
												value="columns"
												control={<Radio />}
												label="Columns Layout"
											/>
											<div>
												{layoutNbPerRowArray.map((i) => (
													<Label
														key={`label-${i}`}
														layout="columns"
														soapLabel={demoSoap}
														demo={true}
														tmpSettings={settings}
													/>
												))}
											</div>
										</Grid>
										{isLayoutColumn && (
											<React.Fragment>
												{commonFields(true)}
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Label Left Padding
														</FormLabel>
														<Slider
															id="padding-left"
															label="Left Padding"
															size="small"
															value={parseInt(padding.pl)}
															onChange={(e) =>
																handlePaddingChange(
																	e.target.value,
																	"pl"
																)
															}
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															{...sliderPaddingProperties}
															style={sliderStyle}
															valueLabelFormat={valueLabelFormatInPx}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Label Right Padding
														</FormLabel>
														<Slider
															id="padding-right"
															label="Right Padding"
															size="small"
															value={parseInt(padding.pr)}
															onChange={(e) =>
																handlePaddingChange(
																	e.target.value,
																	"pr"
																)
															}
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															{...sliderPaddingProperties}
															style={sliderStyle}
															valueLabelFormat={valueLabelFormatInPx}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<InputLabel id="nbPerRow-label">
															Number of label per row (between 2 and
															6)
														</InputLabel>
														<Select
															required
															id="nbPerRow"
															labelId="nbPerRow-label"
															label="Number of Label per Row (2 to 6)"
															size="small"
															value={layoutNbPerRow}
															// error={layoutNbPerRowError}
															onChange={handleLayoutNbPerRowChange}
															style={{
																width: "100%",
															}}
														>
															<MenuItem value={2}>2</MenuItem>
															<MenuItem value={3}>3</MenuItem>
															<MenuItem value={4}>4</MenuItem>
															<MenuItem value={5}>5</MenuItem>
															<MenuItem value={6}>6</MenuItem>
														</Select>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<InputLabel id="textAlignment-label">
															Text Alignment
														</InputLabel>
														<Select
															required
															id="textAlignment"
															labelId="textAlignment-label"
															label="Text Alignment"
															size="small"
															value={textAlignment}
															onChange={handleTextAlignmentChange}
															style={{
																width: "100%",
															}}
														>
															<MenuItem value="left">Left</MenuItem>
															<MenuItem value="right">Right</MenuItem>
														</Select>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControlLabel
														control={
															<Checkbox
																checked={dateLeft}
																onChange={handleDateLeftChange}
															/>
														}
														label="Date on the left"
													/>
												</Grid>
											</React.Fragment>
										)}
									</Grid>
								</Grid>
								<Grid item xs={12} className={classes.gridItemLayout}>
									<Grid
										container
										spacing={2}
										className={classes.gridLayoutsContainer}
									>
										<Grid item xs={12}>
											<FormControlLabel
												value="wide"
												control={<Radio />}
												label="Wide Row Layout"
											/>
											<Label
												layout="wide"
												soapLabel={demoSoap}
												demo={true}
												tmpSettings={settings}
											/>
										</Grid>
										{!isLayoutColumn && (
											<React.Fragment>
												{commonFields(false)}
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Column 1 Left Padding
														</FormLabel>
														<Slider
															id="padding-left1"
															label="Column 1 Left Padding"
															size="small"
															value={parseInt(padding.pl1)}
															onChange={(e) =>
																handlePaddingChange(
																	e.target.value,
																	"pl1"
																)
															}
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															{...sliderPaddingProperties}
															style={sliderStyle}
															valueLabelFormat={valueLabelFormatInPx}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Column 1 Right Padding
														</FormLabel>
														<Slider
															id="padding-right1"
															label="Column 1 Right Padding"
															size="small"
															value={parseInt(padding.pr1)}
															onChange={(e) =>
																handlePaddingChange(
																	e.target.value,
																	"pr1"
																)
															}
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															{...sliderPaddingProperties}
															style={sliderStyle}
															valueLabelFormat={valueLabelFormatInPx}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Column 2 Left Padding
														</FormLabel>
														<Slider
															id="padding-left2"
															label="Column 2 Left Padding"
															size="small"
															value={parseInt(padding.pl2)}
															onChange={(e) =>
																handlePaddingChange(
																	e.target.value,
																	"pl2"
																)
															}
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															{...sliderPaddingProperties}
															style={sliderStyle}
															valueLabelFormat={valueLabelFormatInPx}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Column 2 Right Padding
														</FormLabel>
														<Slider
															id="padding-right2"
															label="Column 2 Right Padding"
															size="small"
															value={parseInt(padding.pr2)}
															onChange={(e) =>
																handlePaddingChange(
																	e.target.value,
																	"pr2"
																)
															}
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															{...sliderPaddingProperties}
															style={sliderStyle}
															valueLabelFormat={valueLabelFormatInPx}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Left Column Size (in %)
														</FormLabel>
														<Slider
															id="textAlignment"
															label="Left Column Size (in %)"
															value={parseInt(leftColumnWidth * 100)}
															onChange={handleLeftColumnWidthChange}
															size="small"
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															min={25}
															max={75}
															// marks={[{value: 25, label: '25%'}, {value: 75, label: '75%'}]}
															style={sliderStyle}
															valueLabelFormat={
																valueLabelFormatInPercentage
															}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">
															Seperator Width (in px)
														</FormLabel>
														<Slider
															id="seperatorWidth"
															label="Seperator Width (in px)"
															value={parseInt(seperatorWidth)}
															onChange={handleSeperatorWidthChange}
															size="small"
															valueLabelDisplay={
																sliderValueLabelDisplay
															}
															step={1}
															min={0}
															max={10}
															style={sliderStyle}
															valueLabelFormat={valueLabelFormatInPx}
														/>
													</FormControl>
												</Grid>
											</React.Fragment>
										)}
									</Grid>
								</Grid>
							</Grid>
						</RadioGroup>
					</FormControl>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default withStyles(styles, { name: "SettingsModal" })(SettingsModal);
