import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
	themeMode: 'light',
	darkTheme: () => { },
	lightTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
	const [themeMode, setThemeMode] = useState('light');
	useEffect(() => {
		const savedTheme = localStorage.getItem('themeMode') || 'light';
		setThemeMode(savedTheme);
		document.documentElement.classList.toggle('dark', savedTheme === 'dark');
	}, []);

	const darkTheme = () => {
		setThemeMode('dark');
		localStorage.setItem('themeMode', 'dark');
		document.documentElement.classList.add('dark');
		document.documentElement.classList.remove('light');
	}

	const lightTheme = () => {
		setThemeMode('light');
		localStorage.setItem('themeMode', 'light');
		document.documentElement.classList.add('light');
		document.documentElement.classList.remove('dark');
	}

	return (
		<ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default function useTheme() {
	return useContext(ThemeContext);
}
