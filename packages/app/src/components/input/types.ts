import type { Theme } from "@/providers/theme-provider";
import type { SystemProps } from "@xstyled/styled-components";
import type { ComponentPropsWithRef } from "react";

export type InputProps = SystemProps<Theme> & ComponentPropsWithRef<"input"> & {};
