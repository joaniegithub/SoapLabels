import './SettingsModal.css';
import * as React from 'react';
import Label from './labelLayouts/Label';
import LabelWideRow from './labelLayouts/LabelWideRow';

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
import { Modal } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import BackspaceIcon from '@mui/icons-material/Backspace';
// import SaveIcon from '@mui/icons-material/Save';

export default function SettingsModal(props) {
	const [settings] = React.useState(props.settings);

	const [soapBrand, setSoapBrand] = React.useState(props.settings.brand);
	const [soapBrandError/*, setSoapBrandError*/] = React.useState(false);
	const [font, setFont] = React.useState(props.settings.font);
	const [fontError/*, setFontError*/] = React.useState(false);
	const [padding, setPadding] = React.useState(props.settings.padding);

	const [layout, setLayout] = React.useState(props.settings.layout);
	const [isLayoutColumn, setIsLayoutColumn] = React.useState(true);
	const [layoutNbPerRow, setLayoutNbPerRow] = React.useState(props.settings.layoutNbPerRow);
	const [layoutNbPerRowError, setLayoutNbPerRowError] = React.useState(false);
	const [layoutNbPerRowArray, setLayoutNbPerRowArray] = React.useState([...Array(props.settings.layoutNbPerRow).keys()]);
	
	const handleSoapBrandChange = (event) => {
		setSoapBrand(event.target.value);
		settings.brand = event.target.value;
	};
	const handleFontChange = (event) => {
		setFont(event.target.value);
		settings.font = event.target.value;
	};
	const handleLayoutChange = (event) => {
		setLayout(event.target.value);
		setIsLayoutColumn(event.target.value === "columns");
		settings.layout = event.target.value;
	};
	const handleLayoutNbPerRowChange = (event) => {
		const val = parseInt(event.target.value);
		const valid = val>=2 && val<=6;
		setLayoutNbPerRowError(!valid);
		if (valid) {
			setLayoutNbPerRow(val);
			setLayoutNbPerRowArray([...Array(val).keys()]);
			settings.layoutNbPerRow = val;
		}
	};
	const handlePaddingChange = (value, property) => {
		padding[property] = value;
		const newPadding = {...padding};
		setPadding(newPadding);
		console.log('property='+value);
		settings.padding = newPadding;
	};

	const handleClose = () => {
		props.onClose();
		props.saveSettings(settings);
	};

	console.log(layoutNbPerRowArray);

	return (
		<Modal open={props.open}>
			<Box className="modalBox">
				<FormControl fullWidth={true} component="form" className="form">
					<Grid container spacing={2} className="gridForm">
						<Grid item xs={6}>
							<h2 className="secondTitle title">Settings</h2>
						</Grid>
						<Grid item xs={6} className="gridItemClose">
							<IconButton onClick={handleClose}><CloseIcon/></IconButton>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id="font"
								label="Font"
								size="small"
								helperText=""
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
								value={soapBrand}
								error={soapBrandError}
								onChange={handleSoapBrandChange}
								style={{ width: '100%' }}
							/>
						</Grid>
						<Grid item xs={12} className="gridItemLayout">
							<FormControl component="fieldset">
								<FormLabel component="legend">Layout</FormLabel>
								<RadioGroup
									aria-label="layour"
									value={layout}
									onChange={handleLayoutChange}
									name="radio-buttons-group"
								>
									<Grid container spacing={2} className="gridLayoutsContainer">
										<Grid item xs={12}>
											<FormControlLabel value="columns" control={<Radio />} label="Columns Layout" />
											<div>
												{layoutNbPerRowArray.map(i => (
													<Label
														key={`label-${i}`}
														settings={settings}
														layout="columns"
														soapName="Soap name"
														ingredients="Ingredients: water, coconut oil, palm oil, lye, avocado oil, canola oil, castor oil, olive oil, safflower oil, cocoa butter, fragrance(s), colorant(s)." 
														brand={settings.brand}
														phrase="Some catchy phrase"
													/>
												))}
											</div>
										</Grid>
										<Grid item xs={12}>
											<FormControlLabel value="wide" control={<Radio />} label="Wide Row Layout" />
											<LabelWideRow
												settings={settings}
												layout="wide"
												soapName="Soap name"
												ingredients="Ingredients: water, coconut oil, palm oil, lye, avocado oil, canola oil, castor oil, olive oil, safflower oil, cocoa butter, fragrance(s), colorant(s)." 
												brand={settings.brand}
												phrase="Some catchy phrase"
											/>
										</Grid>
									</Grid>
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="padding-top"
								label="Top margin"
								size="small"
								helperText=""
								value={padding.pt}
								onChange={(e) => handlePaddingChange(e.target.value, 'pt')}
								style={{ width: '100%' }}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="padding-bottom"
								label="Bottom margin"
								size="small"
								helperText=""
								value={padding.pb}
								onChange={(e) => handlePaddingChange(e.target.value, 'pb')}
								style={{ width: '100%' }}
							/>
						</Grid>
						{!isLayoutColumn && (
							<React.Fragment>
								<Grid item xs={3}>
									<TextField
										id="padding-top"
										label="Column 1 Left margin"
										size="small"
										helperText=""
										value={padding.pl1}
										onChange={(e) => handlePaddingChange(e.target.value, 'pl1')}
										style={{ width: '100%' }}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										id="padding-bottom"
										label="Column 1 Right margin"
										size="small"
										helperText=""
										value={padding.pr1}
										onChange={(e) => handlePaddingChange(e.target.value, 'pr1')}
										style={{ width: '100%' }}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										id="padding-top"
										label="Column 2 Left margin"
										size="small"
										helperText=""
										value={padding.pl2}
										onChange={(e) => handlePaddingChange(e.target.value, 'pl2')}
										style={{ width: '100%' }}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										id="padding-bottom"
										label="Column 2 Right margin"
										size="small"
										helperText=""
										value={padding.pr2}
										onChange={(e) => handlePaddingChange(e.target.value, 'pr2')}
										style={{ width: '100%' }}
									/>
								</Grid>
							</React.Fragment>
						)}
						{isLayoutColumn && (
							<React.Fragment>
								<Grid item xs={6}>
									<TextField
										id="padding-top"
										label="Left margin"
										size="small"
										helperText=""
										value={padding.pl}
										onChange={(e) => handlePaddingChange(e.target.value, 'pl')}
										style={{ width: '100%' }}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										id="padding-bottom"
										label="Right margin"
										size="small"
										helperText=""
										value={padding.pr}
										onChange={(e) => handlePaddingChange(e.target.value, 'pr')}
										style={{ width: '100%' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth>
										<InputLabel id="nbPerRow-label">Number of label per row (between 2 and 6)</InputLabel>
										<Select
											required
											id="nbPerRow"
											labelId="nbPerRow-label"
											label="Number of label per row (between 2 and 6)"
											size="small"
											value={layoutNbPerRow}
											error={layoutNbPerRowError}
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
							</React.Fragment>
						)}
					</Grid>
				</FormControl>
				
			</Box>
		</Modal>
	);
}
