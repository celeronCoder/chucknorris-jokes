import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import Logo from './Logo';
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: 20,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			marginTop: theme.spacing.md,
		},
	},
}));

export default function FooterSocial() {
	const { classes } = useStyles();

	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Logo/>
				<Group spacing={0} className={classes.links} position="right" noWrap>
					<ActionIcon size="lg">
						<FiTwitter size={18} />
					</ActionIcon>
					<ActionIcon size="lg">
						<FiGithub size={18} />
					</ActionIcon>
					<ActionIcon size="lg">
						<AiOutlineApi size={18} />
					</ActionIcon>
				</Group>
			</Container>
		</div>
	);
}