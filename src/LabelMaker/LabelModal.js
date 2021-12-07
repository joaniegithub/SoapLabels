import './LabelModal.css';
import * as React from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SaveIcon from '@mui/icons-material/Save';
import InfoIcon from '@mui/icons-material/Info';

import Label from './labelLayouts/Label';
import { useCurrentSoapLabel, useSettings } from '../store/actions';

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
	const settings = useSettings();
	const currentSoapLabel = useCurrentSoapLabel();

	const {saveLabel, onCloseLabelModal, labelModalOpen} = props;

	const [useThinSpace, setUseThinSpace] = React.useState(false);
	const [useSoapCalcRecipe, setUseSoapCalcRecipe] = React.useState(false);
	const [translateFrench, setTranslateFrench] = React.useState(false);
	const [soapName, setSoapName] = React.useState('');
	const [soapNameError, setSoapNameError] = React.useState(false);
	const [soapIngredients, setSoapIngredients] = React.useState('');
	const [soapCode, setSoapCode] = React.useState('');
	const [soapPhrase, setSoapPhrase] = React.useState('');
	const [soapFragrances, setSoapFragrances] = React.useState('');
	const [soapColorants, setSoapColorants] = React.useState('');

	const [soapRecipeError, setSoapRecipeError] = React.useState(false);
	
	const [ingredientsCodeOutput, setIngredientsCodeOutput] = React.useState('');
	
	const handleUseThinSpaceChange = (event) => {
		const _useThinSpace = !!event.target.checked;
		setUseThinSpace(_useThinSpace);
		setSoapName(_useThinSpace ? soapName.replaceAll(" ", " ") : soapName.replaceAll(" ", " "));
	};
	const handleUseSoapCalcRecipeChange = (event) => {
		setUseSoapCalcRecipe(!!event.target.checked);
	};
	const handleTranslateFrenchChange = (event) => {
		setTranslateFrench(!!event.target.checked);
	};
	const handleSoapNameChange = (event) => {
		const _soapName = event.target.value;
		setSoapName(useThinSpace ? _soapName.replaceAll(" ", " ") : _soapName.replaceAll(" ", " "));
	};
	const handleSoapPhraseChange = (event) => {
		setSoapPhrase(event.target.value);
	};
	const handleSoapFragrancesChange = (event) => {
		setSoapFragrances(event.target.value);
	};
	const handleSoapColorantsChange = (event) => {
		setSoapColorants(event.target.value);
	};

	const handleSoapRecipeChange = (event) => {
		if(useSoapCalcRecipe) {
			setSoapCode(event.target.value);
		} else {
			setSoapIngredients(event.target.value);
		}
	};
	
	const handleClickSave = () => {
		setSoapNameError(!soapName);
		setSoapRecipeError(!soapCode);
		if(soapName && soapCode && ingredientsCodeOutput) {
			// name, ingredients, soapCode, soapIngredients, soapFragrances, soapColorants, phrase, translateFrench
			saveLabel(
				soapName, 
				ingredientsCodeOutput, 
				soapCode, 
				soapIngredients, 
				soapFragrances, 
				soapColorants, 
				soapPhrase, 
				useSoapCalcRecipe, 
				translateFrench
			);
			onCloseLabelModal();
		}
	};

	const generateIngredients = () => {
		let allIngredients = soapCode;

		if (useSoapCalcRecipe) {
			if (!soapCode) {
				return;
			}
			const soapCodeData = {};

			const rxMatchWater = soapCode.match(/^Water [0-9.]+ [0-9.]+ ([0-9.]+$)/m);
			if (rxMatchWater && rxMatchWater.length > 1 && rxMatchWater[1]) {
				soapCodeData[translateFrench ? "Eau" : "Water"] = rxMatchWater[1];
			}

			const rxMatchLye = soapCode.match(/^Lye - NaOH [0-9.]+ [0-9.]+ ([0-9.]+$)/m);
			if (rxMatchLye && rxMatchLye.length > 1 && rxMatchLye[1]) {
				soapCodeData[translateFrench ? "Hydroxyde de sodium" : "Lye"] = rxMatchLye[1];
			}

			// 1 Coconut Oil, 76 deg 30.00 0.595 9.52 270.00
			const arrOils = [...soapCode.matchAll(/^[0-9.]+ ([\s\w,]+) [0-9.]+\.[0-9.]+ [0-9.]+ [0-9.]+ ([0-9.]+)$/gm)];
			arrOils.forEach((oilElem) => {
				soapCodeData[translateFrench ? translations[oilElem[1]] : oilElem[1]] = oilElem[2];
			});

			const sortableRecipeData = [];
			for (let soapItem in soapCodeData) {
				sortableRecipeData.push([soapItem, soapCodeData[soapItem]]);
			}
			sortableRecipeData.sort(function(a, b) {
				return b[1] - a[1];
			});

			allIngredients = sortableRecipeData.map((ingredient) => ingredient[0]).join(", ").toLowerCase();
		} else {
			allIngredients = soapIngredients;
		}

		setSoapIngredients(allIngredients);

		const ingredientsLabel = translateFrench ? "Ingrédients" : "Ingredients";
		allIngredients = `${ingredientsLabel}: ${allIngredients}, ${soapFragrances || "fragrance(s)"}, ${soapColorants || "colorant(s)"}.`
		setIngredientsCodeOutput(allIngredients);
	};
	
	React.useEffect(() => {
		generateIngredients();
	}, [soapCode, soapIngredients, soapColorants, soapFragrances, soapPhrase, useThinSpace, useSoapCalcRecipe, translateFrench]);
	
	React.useEffect(() => {
		if(currentSoapLabel && currentSoapLabel.name && currentSoapLabel.ingredients) {
			setSoapName(currentSoapLabel.name);
			setSoapPhrase(currentSoapLabel.phrase);
			setSoapCode(currentSoapLabel.soapCode);
			setSoapIngredients(currentSoapLabel.soapIngredients || currentSoapLabel.ingredients);
			setSoapFragrances(currentSoapLabel.soapFragrances);
			setSoapColorants(currentSoapLabel.soapColorants);
			setTranslateFrench(currentSoapLabel.translateFrench);
			setUseSoapCalcRecipe(currentSoapLabel.useSoapCalcRecipe && !!currentSoapLabel.soapCode);
		} else {
			setSoapName("");
			setSoapPhrase("");
			setSoapCode("");
			setSoapIngredients("");
			setSoapFragrances("");
			setSoapColorants("");
			setTranslateFrench(settings.translateFrench || false);
			setUseSoapCalcRecipe(true);
		}
	}, [currentSoapLabel, settings]);

	const handleClose = () => {
		onCloseLabelModal();
	};
	
	const isColumnLayout = settings.layout === "columns";
	const pagePadding = {
		pt: Math.max(0, 20-settings.padding.pt)+'px',
		pb: Math.max(0, 20-settings.padding.pb)+'px',
		pl: Math.max(0, 20-(isColumnLayout ? settings.padding.pl : settings.padding.pl1))+'px',
		pr: Math.max(0, 20-(isColumnLayout ? settings.padding.pr : settings.padding.pr2))+'px',
	};
	const arrPerRow = [...Array(isColumnLayout ? settings.layoutNbPerRow : 1).keys()];

	const tooltipSoapCode = `You can copy and paste the soapcalc.net generated recipe, 
		and this if checked, all ingredients will be extracted${translateFrench ? ", translated in french" : ""} and ordered by weight.`;
	
	return (
		<Dialog open={labelModalOpen} scroll="body" maxWidth={'1000px'}>
			<DialogContent dividers={false}>
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
								<FormControlLabel 
									control={<Checkbox 
									checked={useThinSpace}
									onChange={handleUseThinSpaceChange} />} 
									label="Use thin spaces in Soap Name" />
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="phrase"
									label="Phrase"
									size="small"
									helperText=""
									value={soapPhrase}
									onChange={handleSoapPhraseChange}
									style={{ width: '100%' }}
								/>
							</Grid>
							{useSoapCalcRecipe ? (
								<Grid item xs={12}>
									<TextField
										required
										id="soap-code"
										label="Soap Code"
										size="small"
										className="tfRecipeCode"
										multiline
										rows={8}
										value={soapCode}
										error={soapRecipeError}
										onChange={handleSoapRecipeChange}
									/>
								</Grid>
							) : (
								<Grid item xs={12}>
									<TextField
										required
										id="soap-ingredients"
										label="Soap Ingredients"
										size="small"
										className="tfRecipeCode"
										multiline
										rows={8}
										value={soapIngredients}
										error={soapRecipeError}
										onChange={handleSoapRecipeChange}
									/>
								</Grid>
							)}
							<Grid item xs={6}>
								<FormControlLabel 
									control={<Checkbox 
									checked={useSoapCalcRecipe} 
									onChange={handleUseSoapCalcRecipeChange} />} 
									label="Extract ingredients from soapcalc.net recipe"
								/>
								<Tooltip title={tooltipSoapCode} placement="right">
									<IconButton size="small">
										<InfoIcon />
									</IconButton>
								</Tooltip>
							</Grid>
							<Grid item xs={6}>
								<FormControlLabel 
									disabled={!useSoapCalcRecipe}
									control={<Checkbox 
									checked={translateFrench} 
									onChange={handleTranslateFrenchChange} />} 
									label="Translate ingredients in french."
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="soap-fragrances"
									label="Soap Fragrance(s)"
									size="small"
									value={soapFragrances}
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
					<Grid className="gridResult" {...pagePadding}>
						{arrPerRow.map(i => (
							<Label
								key={`label-${i}`}
								soapName={soapName}
								ingredients={ingredientsCodeOutput}
								phrase={soapPhrase}
							/>
						))}
					</Grid>
				</Box>
			</DialogContent>
		</Dialog>
	);
}
