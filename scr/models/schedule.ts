import { CarDTO } from './car';

export interface ScheduleDTO {
	user_id: number;
	car: CarDTO;
	startDate: string;
	endDate: string;
	id: number;
}
