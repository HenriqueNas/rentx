import styled from 'styled-components/native';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.color.header};
`;

export const Brand = styled(BrandSvg).attrs({
	width: 80,
	height: 50,
})``;

export const Logo = styled(LogoSvg).attrs({
	width: 180,
	height: 20,
})``;
