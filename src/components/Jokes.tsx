import {
	ActionIcon,
	Container,
	createStyles,
	MultiSelect,
	SelectItem,
	SimpleGrid,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { useWindowScroll } from "@mantine/hooks";
import { capitalizeFirstLetter, createRange } from "../utils/helper";
import JokeCard from "./JokeCard";
import axios from "../axios";

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
	backToTop: {
		fontSize: "2em",
		marginTop: "1em",
		alignSelf: "center",
		color: "#F05B24",
	},
}));

export default function Jokes() {
	const { classes } = useStyles();
	const [categories, setCategories] = useState<SelectItem[]>();
	const [selectedCategories, setSelectedCategories] = useState<string[]>();
	// eslint-disable-next-line no-unused-vars
	const [_, scrollTo] = useWindowScroll();

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
				{createRange({ to: 15 }).map(() => (
					<JokeCard categories={selectedCategories} />
				))}
			</SimpleGrid>
			<ActionIcon
				variant="hover"
				className={classes.backToTop}
				onClick={() => scrollTo({ y: 0 })}
			>
				<BiArrowToTop />
			</ActionIcon>
		</Container>
	);
}
