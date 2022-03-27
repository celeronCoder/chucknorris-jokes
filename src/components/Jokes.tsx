import { Container, createStyles, SimpleGrid } from "@mantine/core";
import { createRange } from "../utils/helper";
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
