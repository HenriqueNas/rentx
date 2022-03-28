interface ITheme {
	color: IColors;
	fonts: IFonts;
}

interface IFonts {
	primary_regular: string;
	primary_medium: string;
	secondary_regular: string;
	secondary_medium: string;
	secondary_bold: string;
}
interface IColors {
	header: string;
	background_primary: string;
	background_secondary: string;
	shape: string;
	shape_dark: string;
	text: string;
	text_details: string;
	title: string;
	line: string;
	main: string;
	main_light: string;
	success: string;
}

export type ColorType = keyof IColors;

const theme: ITheme = {
	color: {
		header: '#1B1B1F',

		background_primary: '#F4F5F6',
		background_secondary: '#FFFFFF',
		shape: '#E1E1E8',
		shape_dark: '#29292E',

		text: '#7A7A80',
		text_details: '#AEAEB3',
		title: '#47474D',

		line: '#EBEBF0',
		main: '#DC1637',
		main_light: '#FDEDEF',

		success: '#03B252',
	},
	fonts: {
		primary_regular: 'Inter_400Regular',
		primary_medium: 'Inter_500Medium',
		secondary_regular: 'Archivo_400Regular',
		secondary_medium: 'Archivo_500Medium',
		secondary_bold: 'Archivo_600SemiBold',
	},
};

export default theme;
