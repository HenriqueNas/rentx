import { CarData } from '../components/CarDataCard';
import { CarProps } from '../models/car';

export type AppStackParams = {
	Home: undefined;
	CarDetails: {
		data: CarProps;
	};
	Scheduling: {
		data: CarProps;
	};
	SchedulingDetails: {
		carData: CarProps;
		rentalInfo: {
			start: string;
			end: string;
			totalDays: number;
		};
	};
	SchedulingComplete: undefined;
};
