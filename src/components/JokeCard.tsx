import {
	Avatar,
	Badge,
	Card,
	Group,
	Text,
	useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "../axios";
import { Joke } from "../interfaces/data";
import { getDate } from "../utils/helper";

export default function JokeCard() {
	const [joke, setJoke] = useState<Joke>({
		categories: [],
		created_at: "",
		icon_url: "",
		id: "",
		updated_at: "",
		url: "",
		value: "",
	});
	const theme = useMantineTheme();

	useEffect(() => {
		(async function fetchJoke() {
			const { data, status } = await axios.get("/random");
			if (status === 200 && data) {
				setJoke(data);
			}
		})();
	}, []);

	return (
		<Card shadow="sm" p="xl" target="_blank" component="a" href={joke.url}>
			<Card.Section
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "1em",
				}}
			>
				<Avatar src={joke.icon_url} alt="chuck norris" />
			</Card.Section>

			<Text
				style={{
					lineHeight: 2,
					fontFamily: `'Mali', cursive`,
					fontWeight: "bold",
				}}
				mt={10}
				size="sm"
			>
				{joke.value}
			</Text>

			<Group
				position="right"
				style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
			>
				<Badge
					variant="gradient"
					gradient={{ from: "red", to: "orange" }}
				>
					{getDate(joke.updated_at)}
				</Badge>
				{joke.categories.length > 0
					? joke.categories.map((category) => (
							<Badge
								variant="gradient"
								gradient={{ from: "indigo", to: "cyan" }}
							>
								{category}
							</Badge>
					  ))
					: null}
			</Group>
		</Card>
	);
}
