import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Autocomplete } from './components';
import { AppRoot } from './_css/elements';
import { GreenAndPinkTheme } from './_css/themes';
 
class App extends Component {
	render() {
		return (
			<ThemeProvider theme={GreenAndPinkTheme}>
				<div className="App">
					<AppRoot />
					<Autocomplete />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
