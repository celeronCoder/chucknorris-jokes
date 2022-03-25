import { createStyles } from "@mantine/core";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

const useStyles = createStyles((theme, _params, getRef) => {
	const dark = theme.colorScheme === 'dark';
	return {
		main: {
			backgroundColor: dark ? theme.colors.gray[8] : theme.white,
			height: '100vh',
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'column'
		}
	}
})

function MainComponent() {
	const { classes } = useStyles();
	return (
		<div className={classes.main}>
			<Header links={[
				{
					link: '/',
					label: 'Home'
				}
			]} />
			<Footer />
		</div>
	)
}

export default MainComponent