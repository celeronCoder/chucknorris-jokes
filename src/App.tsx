import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage, useColorScheme } from '@mantine/hooks';
import MainComponent from "./MainComponent"

function App() {
	const preferredColorScheme = useColorScheme();
	
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: preferredColorScheme
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider theme={{colorScheme}}>
				<MainComponent />
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default App
