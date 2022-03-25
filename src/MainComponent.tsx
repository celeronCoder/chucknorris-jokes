import { createStyles } from "@mantine/core";
import {Footer, Header, Jokes} from "./components";

const useStyles = createStyles((theme, _params, getRef) => {
	const dark = theme.colorScheme === 'dark';
	return {
		main: {
			backgroundColor: dark ? theme.colors.gray[8] : theme.white,
			height: '100%',
			minHeight: '100vh',
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
			<Jokes />
			<Footer />
		</div>
	)
}

export default MainComponent