import React from 'react';
import { StatusBar } from 'react-native';

import {
	Extrapolate,
	interpolate,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated';

import { RouteProp, useRoute } from '@react-navigation/native';
import { useAppNavigation } from '../../hooks/navigation';
import { AppStackParams } from '../../routes/routes';

import { Button } from '../../components/Button';
import { Optinal } from '../../components/Optinal';
import { ImageSlider } from '../../components/ImageSlider';
import { GoBackButton } from '../../components/GoBackButton';

import SpeedSvg from '../../assets/speed.svg';
import ForceSvg from '../../assets/force.svg';
import PeopleSvg from '../../assets/people.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import EnergySvg from '../../assets/energy.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import HybridSvg from '../../assets/hybrid.svg';

import {
	Container,
	View,
	Header,
	Details,
	Info,
	Div,
	Brand,
	Model,
	Period,
	Price,
	OptionalGrid,
	Description,
	Footer,
} from './styles';

type CarDetailsRouteProps = RouteProp<AppStackParams, 'CarDetails'>;

export const accessoriesIconMap = {
	speed: SpeedSvg,
	turning_diameter: ForceSvg,
	acceleration: AccelerationSvg,
	gasoline: GasolineSvg,
	electric: EnergySvg,
	hybrid_motor: HybridSvg,
	exchange: ExchangeSvg,
	seats: PeopleSvg,
};

export function CarDetails() {
	const {
		params: { data },
	} = useRoute<CarDetailsRouteProps>();
	const navigation = useAppNavigation();

	const scrollY = useSharedValue(0);
	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	const headerStyleAnimation = useAnimatedStyle(() => {
		return {
			height: interpolate(
				scrollY.value,
				[0, 200],
				[200, 40],
				Extrapolate.CLAMP
			),
		};
	});

	const sliderCarsStyleAnimation = useAnimatedStyle(() => {
		return {
			opacity: interpolate(scrollY.value, [0, 150], [1, 0]),
		};
	});

	function handleNavigate() {
		navigation.navigate('Scheduling', {
			data: data,
		});
	}

	return (
		<Container>
			<StatusBar barStyle="dark-content" />

			<View style={headerStyleAnimation}>
				<Header>
					<GoBackButton />
				</Header>

				<View style={sliderCarsStyleAnimation}>
					<ImageSlider imagesUrl={data.photos} />
				</View>
			</View>

			<Details onScroll={scrollHandler}>
				<Info>
					<Div>
						<Brand>{data.brand}</Brand>
						<Model>{data.name}</Model>
					</Div>

					<Div>
						<Period>{data.rent.period}</Period>
						<Price>R$ {data.rent.price}</Price>
					</Div>
				</Info>

				<OptionalGrid>
					{data.accessories.map((accessory) => (
						<Optinal
							key={accessory.name}
							name={accessory.name}
							icon={accessoriesIconMap[accessory.type]}
						/>
					))}
				</OptionalGrid>

				<Description>{data.about}</Description>
			</Details>

			<Footer>
				<Button title="Escolha o período do aluguel" onPress={handleNavigate} />
			</Footer>
		</Container>
	);
}
