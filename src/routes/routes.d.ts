import { CarData } from '../components/CarDataCard';
import { CarDTO } from '../models/car';

export type AppStackParams = {
	Home: undefined;
	RentedCars: undefined;
	CarDetails: {
		data: CarDTO;
	};
	Scheduling: {
		data: CarDTO;
	};
	SchedulingDetails: {
		carData: CarDTO;
		rentInfo: {
			start: string;
			end: string;
			totalDays: number;
		};
	};
	SchedulingComplete: undefined;
};
