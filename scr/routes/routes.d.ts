import { CarData } from '../components/CarDataCard';

export type AppStackParams = {
	Home: undefined;
	CarDetails: {
		data: CarData;
	};
	Scheduling: undefined;
};
