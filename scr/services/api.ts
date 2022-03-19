import axios from 'axios';
import { CarProps } from '../models/car';

const api = axios.create({
	baseURL: 'http://192.168.1.6:3333/',
});

export async function getCars(): Promise<CarProps[]> {
	try {
		const response = await api.get('/cars');
		const cars: CarProps[] = response.data;

		return cars;
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
