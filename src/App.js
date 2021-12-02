import './App.css';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './LabelMaker/Main';

const theme = createTheme({
	typography: {
		fontFamily: [
			'Lato',
			'Arial',
			'Shadows Into Light',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		button: {
		  fontSize: '1rem',
		  fontWeight: '600',
		},
	},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
		<Main />
    </ThemeProvider>
  );
}

export default App;
