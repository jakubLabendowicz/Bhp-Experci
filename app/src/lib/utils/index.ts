export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('pl-PL', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}
