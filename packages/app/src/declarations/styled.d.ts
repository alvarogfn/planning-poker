// styled.d.ts

// import original module declarations
import "styled-components";
import "@xstyled/system";

import type { Theme } from "@/providers/theme-provider";

interface AppTheme extends Theme {}

// and extend them!
declare module "@xstyled/system" {
	export interface Theme extends AppTheme {}
}
declare module "styled-components" {
	export interface DefaultTheme extends AppTheme {}
}
