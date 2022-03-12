type Accessories = {
	type:
		| 'speed'
		| 'acceleration'
		| 'turning_diameter'
		| 'gasoline'
		| 'electric'
		| 'hybrid_motor'
		| 'exchange'
		| 'seats'
		| 'string';
	name: string;
};

type Rent = {
	period: string;
	price: number;
};

export interface CarProps {
	id: string;
	brand: string;
	name: string;
	about: string;
	rent: Rent;
	fuel_type: 'electric' | 'gasoline' | 'hybrid_motor';
	thumbnail: string;
	accessories: Accessories[];
	photos: string[];
}
