import { ActionIcon, createStyles } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

const useStyles = createStyles(() => ({
	backToTop: {
		fontSize: "1.7em",
		color: "#F05B24",
		position: "fixed",
		bottom: "20px",
		right: "20px",
	},
}));

function BackToTop() {
	const { classes } = useStyles();
	const [display, setDisplay] = useState<string>();
	const scroll = () => {
		// eslint-disable-next-line no-unused-expressions
		document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
			? setDisplay("block")
			: setDisplay("none");
	};
	window.onscroll = () => {
		scroll();
	};

	// eslint-disable-next-line no-unused-vars
	const [_, scrollTo] = useWindowScroll();
	return (
		<ActionIcon
			variant="outline"
			onClick={() => scrollTo({ y: 0 })}
			style={{ display }}
			className={classes.backToTop}
		>
			<BiArrowToTop />
		</ActionIcon>
	);
}

export default BackToTop;
