import {
	Container,
	createStyles,
	MultiSelect,
	SelectItem,
	SimpleGrid,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter, createRange } from "../utils/helper";
import JokeCard from "./JokeCard";
import axios from "../axios";
import BackToTop from "./BackToTop";

// eslint-disable-next-line no-unused-vars
const useStyles = createStyles((_theme) => ({
	container: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-around",
		flexDirection: "column",
		padding: "0.5em",
	},
	grid: {
		flex: 1,
	},
}));

export default function Jokes() {
	const { classes } = useStyles();
	const [categories, setCategories] = useState<SelectItem[]>();
	const [selectedCategories, setSelectedCategories] = useState<string[]>();

	useEffect(() => {
		(async function fetchCategories() {
			const { data, status } = await axios.get("/categories");

			if (status === 200 && data) {
				// eslint-disable-next-line no-array-constructor
				const categoriesArray = new Array<SelectItem>();
				data.forEach((category: any) => {
					categoriesArray.push({
						value: category,
						label: capitalizeFirstLetter(category),
					});
				});

				setCategories(categoriesArray);
			}
		})();
	}, []);
	return (
		<Container className={classes.container}>
			{categories ? (
				<MultiSelect
					data={categories}
					label="Select joke category(s)"
					placeholder="Pick all that you like"
					value={selectedCategories}
					onChange={setSelectedCategories}
					style={{
						marginBottom: "1em",
					}}
				/>
			) : null}
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
				{createRange({ to: 30 }).map(() => (
					<JokeCard categories={selectedCategories} />
				))}
			</SimpleGrid>
			<BackToTop />
		</Container>
	);
}
