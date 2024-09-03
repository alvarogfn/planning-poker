import { Box } from "@/components/box";
import { Icon } from "@/components/icon";

function LoadingPage() {
	return (
		<Box display="flex" h="100vh" w="100vw" alignItems="center" justifyContent="center">
			<Icon name="circle-loading" color="blue-500" />
		</Box>
	);
}

export default LoadingPage;
