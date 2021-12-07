import './SettingsModal.css';
import * as React from 'react';
import Label from './labelLayouts/Label';

import { Box } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import BackspaceIcon from '@mui/icons-material/Backspace';
// import SaveIcon from '@mui/icons-material/Save';
import { Slider } from '@mui/material';

import { useDispatch } from 'react-redux';
import { editSettings, useSettings } from '../store/actions';

const sliderStyle = {marginLeft: 12, marginRight: 12, width: "auto"};
const sliderPaddingProperties = {
	min: 10, max: 100,
	marks: [{value: 10, label: '10'}, {value: 100, label: '100'}]
};

export default function SettingsModal(props) {
	const dispatch = useDispatch();
	const settings = useSettings();

	const { onCloseSettingsModal, settingsModalOpen } = props;

	const [brand, setBrand] = React.useState(settings.brand); 
	const [brandError/*, setBrandError*/] = React.useState(false);
	const [font, setFont] = React.useState(settings.font);
	const [fontError/*, setFontError*/] = React.useState(false);
	const [padding, setPadding] = React.useState(settings.padding);

	const [layout, setLayout] = React.useState(settings.layout);
	const [isLayoutColumn, setIsLayoutColumn] = React.useState(settings.layout === "columns");
	const [layoutNbPerRow, setLayoutNbPerRow] = React.useState(settings.layoutNbPerRow);
	const [layoutNbPerRowArray, setLayoutNbPerRowArray] = React.useState([...Array(settings.layoutNbPerRow).keys()]);
	const [textAlignment, setTextAlignment] = React.useState(settings.textAlignment);
	const [leftColumnWidth, setLeftColumnWidth] = React.useState(settings.leftColumnWidth);
	const [seperatorWidth, setSeperatorWidth] = React.useState(settings.seperatorWidth);
	
	const handleBrandChange = (event) => {
		setBrand(event.target.value);
		updateSettings();
	};
	const handleFontChange = (event) => {
		setFont(event.target.value);
		updateSettings();
	};
	const handleLayoutChange = (event) => {
		setLayout(event.target.value);
		setIsLayoutColumn(event.target.value === "columns");
		updateSettings();
	};
	const handlePaddingChange = (value, property) => {
		padding[property] = value;
		const newPadding = {...padding};
		setPadding(newPadding);
		updateSettings();
	};
	const handleLeftColumnWidthChange = (event) => {
		setLeftColumnWidth(event.target.value/100);
		updateSettings();
	};
	const handleSeperatorWidthChange = (event) => {
		setSeperatorWidth(event.target.value);
		updateSettings();
	};
	const handleTextAlignmentChange = (event) => {
		setTextAlignment(event.target.value);
		updateSettings();
	};
	const handleLayoutNbPerRowChange = (event) => {
		const val = parseInt(event.target.value);
		const valid = val>=2 && val<=6;
		if (valid) {
			setLayoutNbPerRow(val);
			setLayoutNbPerRowArray([...Array(val).keys()]);
			updateSettings();
		}
	};

	const demoSoap = {
		soapName: "Soap name", 
		ingredients: "Ingredients: water, coconut oil, palm oil, lye, avocado oil, canola oil, castor oil, olive oil, safflower oil, cocoa butter, fragrance(s), colorant(s).",
		phrase: "Some catchy phrase",
		soapDate: new Date(),
	};

	const updateSettings = () => {
		// setSettings({...settings});
		// settings.brand = event.target.value;
		// settings.font = event.target.value;
		// settings.layout = event.target.value;
		// settings.padding = newPadding;
		// settings.leftColumnWidth = event.target.value/100;
		// settings.seperatorWidth = event.target.value;
		// settings.textAlignment = event.target.value;
	}

	const handleClose = () => {
		const settingsData = {
			brand,
			font,
			layout,
			padding,
			leftColumnWidth,
			seperatorWidth,
			textAlignment,
			layoutNbPerRow,
		};
		dispatch(editSettings(settingsData));
		onCloseSettingsModal();
	};

	return (
		<Dialog open={settingsModalOpen} scroll="body" maxWidth={'1000px'}>
			<DialogContent dividers={false}>
				<Box className="modalBox">
					<FormControl fullWidth={true} component="form" className="form">
						<RadioGroup
							aria-label="layour"
							value={layout}
							onChange={handleLayoutChange}
							name="radio-buttons-group"
						>
							<Grid container spacing={2} className="gridForm">
								<Grid item xs={6}>
									<h2 className="secondTitle title">Settings</h2>
								</Grid>
								<Grid item xs={6} className="gridItemClose">
									<IconButton onClick={handleClose}><CloseIcon/></IconButton>
								</Grid>
								<Grid item xs={12}>
									<Grid container spacing={2} className="gridLayoutsContainer">
										<Grid item xs={12}>
											<FormControlLabel value="columns" control={<Radio />} label="Columns Layout" />
											<div>
												{layoutNbPerRowArray.map(i => (
													<Label
														key={`label-${i}`}
														layout="columns"
														soapLabel={demoSoap}
														demo={true}
													/>
												))}
											</div>
										</Grid>
										{isLayoutColumn && (
											<React.Fragment>
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
														style={{ width: '100%' }}
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
														style={{ width: '100%' }}
													/>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Top padding</FormLabel>
														<Slider
															id="padding-top"
															label="Top padding"
															size="small"
															value={parseInt(padding.pt)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pt')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Bottom padding</FormLabel>
														<Slider
															id="padding-bottom"
															label="Bottom padding"
															size="small"
															value={parseInt(padding.pb)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pb')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Left padding</FormLabel>
														<Slider
															id="padding-left"
															label="Left padding"
															size="small"
															value={parseInt(padding.pl)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pl')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Right padding</FormLabel>
														<Slider
															id="padding-right"
															label="Right padding"
															size="small"
															value={parseInt(padding.pr)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pr')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<InputLabel id="nbPerRow-label">Number of label per row (between 2 and 6)</InputLabel>
														<Select
															required
															id="nbPerRow"
															labelId="nbPerRow-label"
															label="Number of label per row (between 2 and 6)"
															size="small"
															value={layoutNbPerRow}
															// error={layoutNbPerRowError}
															onChange={handleLayoutNbPerRowChange}
															style={{ width: '100%' }}
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
														<InputLabel id="textAlignment-label">Text Alignment</InputLabel>
														<Select
															required
															id="textAlignment"
															labelId="textAlignment-label"
															label="Text Alignment"
															size="small"
															value={textAlignment}
															onChange={handleTextAlignmentChange}
															style={{ width: '100%' }}
														>
															<MenuItem value="left">Left</MenuItem>
															<MenuItem value="right">Right</MenuItem>
														</Select>
													</FormControl>
												</Grid>
											</React.Fragment>
										)}
									</Grid>
								</Grid>
								<Grid item xs={12} className="gridItemLayout">
									<Grid container spacing={2} className="gridLayoutsContainer">
										<Grid item xs={12}>
											<FormControlLabel value="wide" control={<Radio />} label="Wide Row Layout" />
											<Label
												layout="wide"
												soapLabel={demoSoap}
												demo={true}
											/>
										</Grid>
										{!isLayoutColumn && (
											<React.Fragment>
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
														style={{ width: '100%' }}
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
														style={{ width: '100%' }}
													/>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Top padding</FormLabel>
														<Slider
															id="padding-top"
															label="Top padding"
															size="small"
															value={parseInt(padding.pt)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pt')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Bottom padding</FormLabel>
														<Slider
															id="padding-bottom"
															label="Bottom padding"
															size="small"
															value={parseInt(padding.pb)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pb')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">Column 1 left padding</FormLabel>
														<Slider
															id="padding-left1"
															label="Column 1 left padding"
															size="small"
															value={parseInt(padding.pl1)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pl1')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">Column 1 right padding</FormLabel>
														<Slider
															id="padding-right1"
															label="Column 1 right padding"
															size="small"
															value={parseInt(padding.pr1)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pr1')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">Column 2 left padding</FormLabel>
														<Slider
															id="padding-left2"
															label="Column 2 left padding"
															size="small"
															value={parseInt(padding.pl2)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pl2')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={3}>
													<FormControl fullWidth>
														<FormLabel component="legend">Column 2 right padding</FormLabel>
														<Slider
															id="padding-right2"
															label="Column 2 right padding"
															size="small"
															value={parseInt(padding.pr2)}
															onChange={(e) => handlePaddingChange(e.target.value, 'pr2')}
															valueLabelDisplay="auto"
															{...sliderPaddingProperties}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Left Column Size</FormLabel>
														<Slider
															id="textAlignment"
															label="Left Column Size"
															value={parseInt(leftColumnWidth*100)}
															onChange={handleLeftColumnWidthChange}
															size="small"
															valueLabelDisplay="auto"
															min={25} max={75}
															marks={[{value: 25, label: '25%'}, {value: 75, label: '75%'}]}
															style={sliderStyle}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6}>
													<FormControl fullWidth>
														<FormLabel component="legend">Seperator Width</FormLabel>
														<Slider
															id="seperatorWidth"
															label="Seperator Width"
															value={parseInt(seperatorWidth)}
															onChange={handleSeperatorWidthChange}
															size="small"
															valueLabelDisplay="auto"
															step={1}
															min={0} max={10}
															style={sliderStyle}
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
}
