import './LabelModal.css';
import * as React from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { Modal } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SaveIcon from '@mui/icons-material/Save';
import Label from './labelLayouts/Label';

const translations = {
	'Almond Oil, sweet': 'Huile d\'amande douce',
	'Aloe Butter': 'Beurre d\'aloès',
	'Argan Oil': 'Huile d\'argane',
	'Avocado Oil': 'Huile d\'avocat',
	'Canola Oil': 'Huile de canola',
	'Castor Oil': 'Huile de ricin',
	'Cocoa Butter': 'Beurre de cacao',
	'Coconut Oil, 76 deg': 'Huile de coconut',
	'Coconut Oil, 92 deg': 'Huile de coconut',
	'Coconut Oil, fractionated': 'Huile de coconut',
	'Corn Oil': 'Huile de maïs',
	'Grapeseed Oil': 'Huile de pépins de raisin',
	'Kokum Butter': 'Beurre de kokum',
	'Jojoba Oil (a Liquid Wax Ester)': 'Huile de jojoba',
	'Mango Seed Butter': 'Beurre de mangue',
	'Olive Oil': 'Huile d\'olive',
	'Palm Oil': 'Huile de palme',
	'Rice Bran Oil, refined': 'Huile de riz',
	'Safflower Oil': 'Huile de carthame',
	'Sesame Oil': 'Huile de sésame',
	'Shea Butter': 'Beurre de karité',
	'Sunflower Oil': 'Huile de tournesol',
}

export default function LabelModal(props) {
	const { editLabel } = props;
	const [settings] = React.useState(props.settings);
	const [soapName, setSoapName] = React.useState('');
	const [soapNameError, setSoapNameError] = React.useState(false);
	const [soapCode, setSoapCode] = React.useState('');
	const [soapCodeError, setSoapCodeError] = React.useState(false);
	const [soapFragrances, setSoapFragrances] = React.useState('');
	const [soapColorants, setSoapColorants] = React.useState('');
	
	const [ingredientsCodeOutput, setIngredientsCodeOutput] = React.useState('');
	const [soapCodeData/*, setSoapCodeData*/] = React.useState({});
	const [useSoapIngredients, setUseSoapIngredients] = React.useState(false);
	const [soapBrand/*, setSoapBrand*/] = React.useState("Joanie Soaperie");
	
	const handleSoapNameChange = (event) => {
		setSoapName(event.target.value);
	};
	const handleSoapFragrancesChange = (event) => {
		setSoapFragrances(event.target.value);
	};
	const handleSoapColorantsChange = (event) => {
		setSoapColorants(event.target.value);
	};
	const handleRecipeCodeChange = (event) => {
		setSoapCode(event.target.value);
	};
	
	const handleClickSave = () => {
		setSoapNameError(!soapName);
		setSoapCodeError(!soapCode);
		if(soapName && soapCode && ingredientsCodeOutput) {
			props.saveLabel(soapName, ingredientsCodeOutput, soapBrand);
			props.onClose();
		}
	};

	const generateIngredients = () => {
		let allIngredients = soapCode;
		if (!useSoapIngredients) {
			const rxMatchWater = soapCode.match(/^Water [0-9.]+ [0-9.]+ ([0-9.]+$)/m);
			if (rxMatchWater?.[1]) {
				soapCodeData["Eau"] = rxMatchWater[1];
			}

			const rxMatchLye = soapCode.match(/^Lye - NaOH [0-9.]+ [0-9.]+ ([0-9.]+$)/m);
			if (rxMatchLye?.[1]) {
				soapCodeData["Hydroxyde de sodium"] = rxMatchLye[1];
			}

			// 1 Coconut Oil, 76 deg 30.00 0.595 9.52 270.00
			const arrOils = [...soapCode.matchAll(/^[0-9.]+ ([\s\w,]+) [0-9.]+\.[0-9.]+ [0-9.]+ [0-9.]+ ([0-9.]+)$/gm)];
			// console.log(arrOils);
			arrOils.forEach((oilElem) => {
				soapCodeData[translations[oilElem[1]]] = oilElem[2];
			});

			const sortableRecipeData = [];
			for (let soapItem in soapCodeData) {
				sortableRecipeData.push([soapItem, soapCodeData[soapItem]]);
			}
			sortableRecipeData.sort(function(a, b) {
				return b[1] - a[1];
			});

			const ingredientsInOrder = sortableRecipeData.map((ingredient) => ingredient[0]).join(", ").toLowerCase();
			allIngredients = `Ingrédients: ${ingredientsInOrder}, ${soapFragrances || "fragrance(s)"}, ${soapColorants || "colorant(s)"}.`
		}
		setIngredientsCodeOutput(allIngredients);
	};
	
	React.useEffect(() => {
		generateIngredients();
	}, [soapCode, soapColorants, soapFragrances]);
	
	React.useEffect(() => {
		if(editLabel && (editLabel.name || editLabel.ingredients)) {
			setSoapName(editLabel.name);
			setSoapCode(editLabel.ingredients);
			setUseSoapIngredients(true);
		} else {
			setSoapName("");
			setSoapCode("");
			setUseSoapIngredients(false);
		}
	}, [editLabel]);

	const handleClose = () => {
		props.onClose();
	};
	
	return (
		<Modal open={props.open}>
			<Box className="modalBox">
				<FormControl fullWidth={true} component="form" className="form">
					<Grid container spacing={2} className="gridForm">
						<Grid item xs={6}>
						<h2 className="secondTitle title">New Soap Label</h2>
						</Grid>
						<Grid item xs={6} className="gridItemClose">
							<IconButton onClick={handleClose}><CloseIcon/></IconButton>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id="soap-name"
								label="Soap Name"
								size="small"
								helperText=""
								value={soapName}
								error={soapNameError}
								onChange={handleSoapNameChange}
								style={{ width: '100%' }}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								id="soap-code"
								label="Soap Recipe Code"
								size="small"
								className="tfRecipeCode"
								multiline
								rows={8}
								value={soapCode}
								error={soapCodeError}
								onChange={handleRecipeCodeChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="soap-fragrances"
								label="Soap Fragrance(s)"
								size="small"
								value={soapFragrances}
								disabled={useSoapIngredients}
								onChange={handleSoapFragrancesChange}
								style={{ width: '100%' }}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="soap-colorants"
								label="Soap Colorant(s)"
								size="small"
								value={soapColorants}
								disabled={useSoapIngredients}
								onChange={handleSoapColorantsChange}
								style={{ width: '100%' }}
							/>
						</Grid>
						<Grid item xs={12} className="gridItemButtons">
							<Button
								className="button"
								size="small"
								endIcon={<BackspaceIcon />}>Clear</Button>
							<Button
								className="button"
								size="small"
								endIcon={<SaveIcon />} 
								onClick={handleClickSave}>Save</Button>
						</Grid>
					</Grid>
				</FormControl>
				
				<h2 className="secondTitle">Label Preview</h2>
				<div className="gridResult">
					<Label
						settings={settings}
						layout={settings.layout}
						soapName={soapName}
						ingredients={ingredientsCodeOutput}
						brand={soapBrand}
						phrase="Some catchy phrase"
					/>
				</div>
			</Box>
		</Modal>
	);
}
