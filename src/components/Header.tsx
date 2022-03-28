import {
	createStyles,
	Header as HeaderMantine,
	Container,
} from "@mantine/core";
import ColorSchemeToggle from "./ColorSchemeToggle";
import Logo from "./Logo";

const HEADER_HEIGHT = 60;

const useStyles = createStyles(() => ({
	root: {
		position: "relative",
		zIndex: 1,
		marginBottom: "2em",
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},
}));

export default function Header() {
	const { classes } = useStyles();

	return (
		<HeaderMantine height={HEADER_HEIGHT} className={classes.root}>
			<Container className={classes.header}>
				<Logo />
				<ColorSchemeToggle />
			</Container>
		</HeaderMantine>
	);
}
