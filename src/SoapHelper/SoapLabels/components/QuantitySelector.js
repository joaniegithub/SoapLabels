
import './QuantitySelector.css';
import * as React from 'react';
import { IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// const styles = {
// 	iconButton: {
// 		padding: '2px',
// 		'svg': {
// 			width: '20px',
// 			height: '20px',
// 		},
// 	}
// }

export default function QuantitySelector(props) {
	const { quantity: quantityProps, handleUpdateQty } = props;
	const [quantity, setQuantity] = React.useState(quantityProps);

	const handleRemove = () => {
		updateQuantity(quantity-1);
	};
	const handleAdd = () => {
		updateQuantity(quantity+1);
	};
	const updateQuantity = (newQty) => {
		setQuantity(newQty);
		handleUpdateQty(newQty);
	};

	return (
		<div className="wrapperQuantity">
			<IconButton size="small" className="iconButton" onClick={handleRemove}><RemoveIcon/></IconButton>
			<span className="labelQuantity">{quantity}</span>
			<IconButton size="small" className="iconButton" onClick={handleAdd}><AddIcon/></IconButton>
		</div>
	);
}
