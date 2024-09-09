import { Box } from "@/components/box";
import { Icon } from "@/components/icon";

function LoadingPage() {
  return (
    <Box alignItems="center" display="flex" h="100vh" justifyContent="center" w="100vw">
      <Icon color="blue-500" name="circle-loading" />
    </Box>
  );
}

export default LoadingPage;
