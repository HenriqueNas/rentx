import axios from 'axios';

import { CarDTO } from '../models/car';
import { ScheduleDTO } from '../models/schedule';

const api = axios.create({
	baseURL: 'http://192.168.1.6:3333/',
});

export async function getCars(): Promise<CarDTO[]> {
	try {
		const response = await api.get('/cars');
		const cars: CarDTO[] = response.data;

		return cars;
	} catch (error) {
		throw new Error(error?.message);
	}
}

export async function getRentedCars(userId: string): Promise<ScheduleDTO[]> {
	try {
		const response = await api.get(`/schedules_byuser?user_id=${userId}`);
		const schedules: ScheduleDTO[] = response.data;

		return schedules;
	} catch (error) {
		throw new Error(error?.message);
	}
}

export async function getUnavailableDates(id: string): Promise<string[]> {
	try {
		const response = await api.get(`/schedules_bycars/${id}`);
		const unavailableDates: string[] = response.data.unavailable_dates;

		return unavailableDates;
	} catch (error) {
		throw new Error(error?.message);
	}
}

export async function scheduleCar(
	id: string,
	formattedDays: string[]
): Promise<void> {
	try {
		const schedulesByCar = await getUnavailableDates(id);

		const unavailable_dates = [...schedulesByCar, ...formattedDays];

		await api.put(`/schedules_bycars/${id}`, {
			id,
			unavailable_dates,
		});
	} catch (error) {
		throw new Error(error?.message);
	}
}
