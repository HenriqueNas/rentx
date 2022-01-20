import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;

	width: 100%;
	padding: 16px 24px;
	margin-bottom: 16px;

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
	height: 85 px;
`;

export const Div = styled.View``;
