import { createStyles, Text } from "@mantine/core";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";

const useStyles = createStyles((theme, _params, getRef) => ({
		footer: {
			backgroundColor: "#F05A25",
			color: theme.white,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'column'
		},
		logo: {
			fontSize: '1.2em'
		},
		socials: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-evenly',
		},
		copyright: {
			color: theme.colors.gray[4]
		}
}));

function Footer() {
	const { classes } = useStyles();
	return (
		<div className={classes.footer}>
			<p className={classes.logo}>ChuckNorris Jokes</p>
			<div>
				<Text size="xl" mr={10} variant="link" component="a" href="https://twitter.com/MatChilling">
					<FiTwitter color="white" />
				</Text>
				<Text mr={10} size="xl" variant="link" component="a" href="https://github.com/chucknorris-io">
					<FiGithub color="white" />
				</Text>
				<Text mr={10} size="xl" variant="link" component="a" href="https://api.chucknorris.io/">
					<AiOutlineApi color="white" />
				</Text>
			</div>
			<p className={classes.copyright}>
				Copyright &#169; 2020 ChuckNorris Jokes
			</p>
		</div>
	);
}

export default Footer;