import './App.css';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './LabelMaker/Main';

const theme = createTheme({
	typography: {
	  fontFamily: [
		'Arial',
		'Montserrat',
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
	},
  });

function App() {
  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
		<Main />
		{/*<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Learn React
				</a>
			</header>
		</div>*/}
    </ThemeProvider>
  );
}

export default App;
