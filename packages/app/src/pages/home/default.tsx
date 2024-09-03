import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Link } from "react-router-dom";

const HomeDefaultPage = () => {
	return (
		<Box>
			<Box
				display="flex"
				align-items="center"
				h="calc(100vh - 80px)"
				justifyContent="center"
				alignItems="center"
				gap="6"
				as="main"
			>
				<Button as={Link} to="/new-game" variant="condense">
					Create a New Game
				</Button>
				<Button as={Link} to="/join-game" variant="condense">
					Join an existing game
				</Button>
			</Box>
		</Box>
	);
};
export default HomeDefaultPage;
