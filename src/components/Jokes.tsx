import { Container, createStyles, SimpleGrid } from "@mantine/core";
import JokeCard from "./JokeCard";

// eslint-disable-next-line no-unused-vars
const useStyles = createStyles((_theme) => ({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "0.5em",
	},
	grid: {
		flex: 1,
	},
}));

interface CreateRangeProps {
	from?: number;
	to: number;
	step?: number;
	length?: number;
}

function createRange({
	from = 0,
	to,
	step = 1,
	length = Math.ceil((to - from) / step),
}: CreateRangeProps) {
	return Array.from({ length }, (_, i) => from + i * step);
}

export default function Jokes() {
	const { classes } = useStyles();
	return (
		<Container className={classes.container}>
			<SimpleGrid
				cols={3}
				spacing="lg"
				className={classes.grid}
				breakpoints={[
					{ maxWidth: "md", cols: 3, spacing: "lg" },
					{ maxWidth: "sm", cols: 2, spacing: "md" },
					{ maxWidth: "xs", cols: 1, spacing: "sm" },
				]}
			>
				{createRange({ to: 15 }).map(() => (
					<JokeCard />
				))}
			</SimpleGrid>
		</Container>
	);
}
