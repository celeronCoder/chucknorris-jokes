import { useMantineColorScheme, Group, ActionIcon } from "@mantine/core";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ColorSchemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Group position="center" my="xl">
			<ActionIcon
				onClick={() => toggleColorScheme()}
				size="lg"
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[6]
							: theme.colors.gray[0],
					color:
						theme.colorScheme === "dark"
							? theme.colors.yellow[4]
							: theme.colors.blue[6],
				})}
			>
				{colorScheme === "dark" ? (
					<FiSun size={18} />
				) : (
					<FiMoon size={18} />
				)}
			</ActionIcon>
		</Group>
	);
}
