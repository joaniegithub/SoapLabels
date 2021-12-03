import './LabelsPrintView.css';
import * as React from 'react';
import Label from './labelLayouts/Label';
import SettingsModal from './SettingsModal';
import { IconButton } from '@mui/material';
import { Grid } from '@mui/material';
import { Tooltip } from '@mui/material';

import PrintIcon from '@mui/icons-material/Print';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

export default function LabelsPrintView(props) {
	const [settings] = React.useState(props.settings);
	const [layoutNbPerRow/*, setLayoutNbPerRow*/] = React.useState(props.settings.layoutNbPerRow);
	const [layout/*, setLayoutNbPerRow*/] = React.useState(props.settings.layout);
	const [settingsModalOpen, setSettingsModalOpen] = React.useState(false);

	// Settings Modal
	const handleClickOpenSettings = () => {
		setSettingsModalOpen(true);
	};
	const handleSettingsModalClose = () => {
		setSettingsModalOpen(false);
	}
	
	const renderedLabels = (soapLabels, _layoutNbPerRow, _layout) => {
		if(_layout === "wide") {
			_layoutNbPerRow = 1;
		}

		let labels = [];
		soapLabels.forEach(soapLabel => {
			for (let i=0; i<soapLabel.quantity; i++){
				labels.push(soapLabel);
			}
		});

		const rows = labels.reduceRight((r,i,_,s) => (r.push(s.splice(0,_layoutNbPerRow)),r),[]);

		return rows.map((row, r) => {
			return (
			<div className="gridPrintRow" key={`labelPreviewRow-${r}`}>
				{row.map((label, l) => {
					const index = r*_layoutNbPerRow+l;
					return (
						<Label
							settings={settings}
							layout={settings.layout}
							key={`labelPreview-${index}`}
							soapName={label.name} 
							ingredients={label.ingredients} 
							brand={settings.brand}
							phrase={label.phrase}
						/>
					);
				})}
			</div>
			);
		});
	};

	// Print
	const handleClickPrint = () => {
		window.print();
	};

	React.useEffect(() => {
	}, [layoutNbPerRow, layout]);

	if(!settings) {
		return null;
	}

	const isColumnLayout = layout === "columns";
	const pagePadding = {
		pt: Math.max(0, 20-settings.padding.pt)+'px',
		pb: Math.max(0, 20-settings.padding.pb)+'px',
		pl: Math.max(0, 20-(isColumnLayout ? settings.padding.pl : settings.padding.pl1))+'px',
		pr: Math.max(0, 20-(isColumnLayout ? settings.padding.pr : settings.padding.pr2))+'px',
	};

	return (
		<React.Fragment>
			<SettingsModal
				settings={settings}
				saveSettings={props.saveSettings}
				open={settingsModalOpen}
				onClose={handleSettingsModalClose}
			/>
			<div className="wrapperForAbsolute noPrint">
				<h2 className="secondTitle">Soap Labels Print Preview
					<Tooltip title="Lines are for visual aids only. And margins could render differently in your print settings." placement="right">
						<IconButton size="small">
							<InfoIcon />
						</IconButton>
					</Tooltip>
				</h2>
				<div className="rightAbsoluteContainer">
					<IconButton onClick={handleClickPrint}><PrintIcon/></IconButton>
					<IconButton onClick={handleClickOpenSettings}><SettingsIcon/></IconButton>
				</div>
			</div>
			<Grid item className="gridPrintLabels" {...pagePadding}>
				{props.soapLabels && props.soapLabels.length ? renderedLabels(props.soapLabels, settings.layoutNbPerRow, settings.layout) : null}
			</Grid>
		</React.Fragment>
	);
}
