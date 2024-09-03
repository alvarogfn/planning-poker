import { Box } from "@/components/box";
import { Image } from "@/components/image";
import { Link } from "react-router-dom";

export function HomeHeader() {
	return (
		<Box padding={10} display="flex" alignItems="center" justifyContent="space-between" h="80px" as="header">
			<Link to="/">
				<Image src="/logo.svg" alt="Planning Poker" w="5rem" h="5rem" />
			</Link>
		</Box>
	);
}

export default HomeHeader;
