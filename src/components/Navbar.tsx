import { ActionIcon, createStyles, Image, useMantineColorScheme } from "@mantine/core";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/logo.svg";

const useStyles = createStyles((theme, _params, getRef) => {
	const dark = theme.colorScheme === "dark";
	return {
		nav: {
			backgroundColor: "#F05A25",
			height: '3em',
			display: 'flex',
			alignItems: 'center',
			justifyContent: "space-between",
			padding: '0em 1em',
			color: theme.white,
		},
		logo: {
			display: "flex",
			alignItems: 'center',
			justifyContent: 'space-between',
			fontSize: '1.2em'
		}
	}
})

function Navbar() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark: boolean = colorScheme === 'dark';
	const { classes } = useStyles();

	return (
		<div className={classes.nav}>
			<div className={classes.logo}>
				<Image
					width={50}
					height={50}
					src={logo}
					alt="logo"
					mr={5}
				/>
				ChuckNorris Jokes
			</div>
			<ActionIcon
				variant="outline"
				color={dark ? 'yellow' : 'blue'}
				onClick={() => toggleColorScheme()}
				title="Toggle Color Scheme"
			>
				{dark ? <FiSun size={18} /> : <FiMoon size={18} />}
			</ActionIcon>
		</div>
	)
}

export default Navbar