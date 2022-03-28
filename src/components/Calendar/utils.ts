import { eachDayOfInterval, format, addDays } from 'date-fns';

import { MarkedDateProps, DateProps } from '.';
import theme from '../../styles/theme';

export function generateInterval(start: DateProps, end: DateProps) {
	let interval: MarkedDateProps = {};

	const days = eachDayOfInterval({
		start: new Date(start.timestamp),
		end: new Date(end.timestamp),
	});

	days.forEach((item) => {
		const formatedDate = format(addDays(item, 1), 'yyyy-MM-dd');

		const color =
			start.dateString === formatedDate || end.dateString === formatedDate
				? theme.color.main
				: theme.color.main_light;

		const textColor =
			start.dateString === formatedDate || end.dateString === formatedDate
				? theme.color.main_light
				: theme.color.main;

		interval = {
			...interval,
			[formatedDate]: {
				color,
				textColor,
			},
		};
	});

	return interval;
}
