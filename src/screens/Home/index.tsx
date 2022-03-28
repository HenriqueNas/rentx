import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, BackHandler } from 'react-native';

import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	useAnimatedGestureHandler,
	withSpring,
} from 'react-native-reanimated';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import * as api from '../../services/api';
import { CarDTO } from '../../models/car';
import { useAppNavigation } from '../../hooks/navigation';

import { Loading } from '../../components/Loading';
import { CarDataCard } from '../../components/CarDataCard';

import Logo from '../../assets/logo.svg';

import {
	Container,
	Header,
	TotalCars,
	CarsList,
	RentedCars,
	CarIcon,
} from './styles';

const AnimatedButton = Animated.createAnimatedComponent(RectButton);

export function Home() {
	const theme = useTheme();
	const navigation = useAppNavigation();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [carsData, setCarsData] = useState<CarDTO[]>([] as CarDTO[]);

	const rentedButtonPositionY = useSharedValue(0);
	const rentedButtonPositionX = useSharedValue(0);

	const animatedButtonStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateY: rentedButtonPositionY.value },
				{ translateX: rentedButtonPositionX.value },
			],
		};
	});

	const handlerGestureEvent = useAnimatedGestureHandler({
		onStart(_, context: any) {
			context.positionX = rentedButtonPositionX.value;
			context.positionY = rentedButtonPositionY.value;
		},
		onActive(event, context: any) {
			rentedButtonPositionX.value = context.positionX + event.translationX;
			rentedButtonPositionY.value = context.positionY + event.translationY;
		},
		onEnd() {
			rentedButtonPositionX.value = withSpring(0);
			rentedButtonPositionY.value = withSpring(0);
		},
	});

	function handleOpenRentedCars() {
		navigation.navigate('RentedCars');
	}

	useEffect(() => {
		(async () => {
			const cars = await api.getCars();
			setCarsData(cars);
			setIsLoading(false);
		})();
	});

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => true);
	});

	return (
		<Container>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<Header>
				<Logo height={RFValue(12)} width={RFValue(108)} />

				<TotalCars>
					{carsData.length > 0 && `Total de ${carsData.length} carros`}
				</TotalCars>
			</Header>

			{isLoading ? (
				<Loading />
			) : (
				<CarsList
					data={carsData}
					keyExtractor={({ id }) => id}
					renderItem={({ item }) => <CarDataCard car={item} />}
				/>
			)}

			<PanGestureHandler onGestureEvent={handlerGestureEvent}>
				<Animated.View
					style={[
						animatedButtonStyle,
						{
							position: 'absolute',
							bottom: 24,
							right: 24,
						},
					]}
				>
					<AnimatedButton
						style={[
							styles.button,
							{
								backgroundColor: theme.color.main,
							},
						]}
						onPress={handleOpenRentedCars}
					>
						<CarIcon />
					</AnimatedButton>
				</Animated.View>
			</PanGestureHandler>
		</Container>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: RFValue(30),

		alignItems: 'center',
		justifyContent: 'center',

		width: RFValue(60),
		height: RFValue(60),
	},
});
