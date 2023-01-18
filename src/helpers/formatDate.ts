export const formatDate = (date: Date) => {
	let p = new Intl.DateTimeFormat('en-GB', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	})
		.formatToParts(date)
		.reduce((acc: any, part: any) => {
			acc[part.type] = part.value;
			return acc;
		}, {});

	return `${p.month} ${p.day}th, ${p.year}`;
};