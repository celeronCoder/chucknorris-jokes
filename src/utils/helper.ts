import { CreateRangeProps } from "../interfaces/props";

export function createRange({
	from = 0,
	to,
	step = 1,
	length = Math.ceil((to - from) / step),
}: CreateRangeProps) {
	return Array.from({ length }, (_, i) => from + i * step);
}

export function getDate(iso: string): string {
	const date = new Date(iso);
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");
	const yyyy = date.getFullYear();

	return `${dd}/${mm}/${yyyy}`;
}
