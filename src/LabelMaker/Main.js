import './Main.css';
import * as React from 'react';
import { Container } from '@mui/material';
import { IconButton } from '@mui/material';
import Cookies from 'universal-cookie';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import LabelMaker from './LabelMaker';

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
	
	let index = 0;

	return (
		<div className={mainClassName}>
			<Container className="header noPrint wrapperForAbsolute">
				<h1 className="mainTitle">Soap Recipe Maker</h1>
				<div className="bgSwitcherContainer rightAbsoluteContainer">
					<IconButton onClick={handlePreviousBg}><ArrowBackIosNewIcon/></IconButton>
					<IconButton onClick={handleNextBg}><ArrowForwardIosIcon/></IconButton>
				</div>
			</Container>
			<Container className="container">
				<LabelMaker/>
			</Container>
			<Container className="footer noPrint">
				<p className="footerCopyright">@2021 Joanie Lessnick</p>
			</Container>
		</div>
	);
}
