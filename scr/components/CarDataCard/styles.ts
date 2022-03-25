import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 16px;

	width: 100%;
	padding: 16px 24px;

	box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
	background-color: ${({ theme }) => theme.color.background_secondary};
`;

export const Brand = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};

	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.text_details};

	margin-bottom: 4px;
`;

export const Model = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.title};
`;

export const Info = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;

	margin-top: 16px;
`;

export const Period = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};

	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.text_details};

	margin-bottom: 4px;
`;

export const Price = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.main};
`;

export const CarImage = styled.Image.attrs({
	resizeMode: 'contain',
})`
	width: 167px;
	height: 85px;
`;

export const Div = styled.View``;

export const RentalDates = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	width: 65%;
`;

export const RentalPeriod = styled.View`
	width: 100%;
	padding: 12px 24px;
	margin-top: 4px;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
	background-color: ${({ theme }) => theme.color.background_secondary};
`;

export const PeriodLabel = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.text};
	text-transform: uppercase;
`;

export const DateLabel = styled.Text`
	font-size: ${RFValue(13)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.title};
	text-transform: uppercase;
`;
