
import './QuantitySelector.css';
import * as React from 'react';
import { IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



export default function QuantitySelector(props) {
	const [quantity, setQuantity] = React.useState(props.quantity);

	const handleRemove = () => {
		updateQuantity(quantity-1);
	};
	const handleAdd = () => {
		updateQuantity(quantity+1);
	};
	const updateQuantity = (newQty) => {
		setQuantity(newQty);
		props.handleUpdateQty(newQty);
	};

	return (
		<div className="wrapperQuantity">
			<IconButton size="small" onClick={handleRemove}><RemoveIcon/></IconButton>
			<span className="labelQuantity">{quantity}</span>
			<IconButton size="small" onClick={handleAdd}><AddIcon/></IconButton>
		</div>
	);
}
