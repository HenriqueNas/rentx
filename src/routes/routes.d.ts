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

export type AuthStackParams = {
	Splash: undefined;
	Login: undefined;
	Register: undefined;
	Password: {
		name: string;
		email: string;
		drivingLicense: string;
	};
	RegisterComplete: undefined;
};
