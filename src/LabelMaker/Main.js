import './Main.css';
import * as React from 'react';
import { Container } from '@mui/material';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import Cookies from 'universal-cookie';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import SoapLabels from './SoapLabels';
import PrivacyPolicyTermsConditions from './PrivacyPolicyTermsConditions';

const images = [
	'arab_tile',
	'bush',
	'circuit',
	'full-bloom',
	'gplaypattern',
	'greek-vase',
	'herringbone',
	'hotel-wallpaper',
	'more-leaves',
	'moroccan-flower',
	'moroccan-flower-dark',
	'morocco-blue',
	'new_year_background',
	'regal',
	'ripples',
	'swirls',
	'tree_bark',
	'trees',
];

export default function Main() {

	const [bgTileIndex, setBgTileIndex] = React.useState(0);
	const [mainClassName, setMainClassName] = React.useState("");

	// Background
	const handlePreviousBg = () => {
		let nextBgTileIndex = bgTileIndex - 1;
		if (nextBgTileIndex < 0){
			nextBgTileIndex = images.length - 1;
		}
		updateBgTileIndex(nextBgTileIndex);
	};
	const handleNextBg = () => {
		let nextBgTileIndex = bgTileIndex + 1;
		if (nextBgTileIndex >= images.length){
			nextBgTileIndex = 0;
		}
		updateBgTileIndex(nextBgTileIndex);
	};
	const updateBgTileIndex = (nextBgTileIndex) => {
		const cookies = new Cookies();
		cookies.set('SoapBgTileIndex', nextBgTileIndex, { path: '/' });
		setBgTileIndex(nextBgTileIndex);
	};

	React.useEffect(() => {
		const cookies = new Cookies();
		const _bgTileIndex = parseInt(cookies.get('SoapBgTileIndex')) || 0;
		setBgTileIndex(_bgTileIndex);
	}, []);

	React.useEffect(() => {
		setMainClassName(`main main_${images[bgTileIndex]}`);
	}, [bgTileIndex]);
	const [privacyTermsModalOpen, setPrivacyTermsModalOpen] = React.useState(false);
	// Settings Modal
	const handlePrivacyTermsModalOpen = () => {
		setPrivacyTermsModalOpen(true);
	};
	const handlePrivacyTermsModalClose = () => {
		setPrivacyTermsModalOpen(false);
	}

	return (
		<div className={mainClassName}>
			<Container className="header noPrint wrapperForAbsolute">
				<h1 className="mainTitle">Soap Labels</h1>
				<div className="bgSwitcherContainer rightAbsoluteContainer">
					<IconButton onClick={handlePreviousBg}><ArrowBackIosNewIcon/></IconButton>
					<IconButton onClick={handleNextBg}><ArrowForwardIosIcon/></IconButton>
				</div>
			</Container>
			<Container className="container">
				<SoapLabels/>
			</Container>
			<Container className="footer noPrint">
				<div className="footerLinks">
					<Button onClick={handlePrivacyTermsModalOpen}>Privacy Policy and Terms</Button>
				</div>
				<p className="footerCopyright">Soap Labels @2021 Joanie Lessnick</p>
			</Container>
			<PrivacyPolicyTermsConditions
				privacyTermsModalOpen={privacyTermsModalOpen}
				onClosePrivacyTermsModal={handlePrivacyTermsModalClose}
			/>
		</div>
	);
}
