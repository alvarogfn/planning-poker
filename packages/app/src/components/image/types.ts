import type { SystemProps } from "@xstyled/styled-components";
import type { ComponentPropsWithRef } from "react";

type BaseImageProps = SystemProps & ComponentPropsWithRef<"img">;

export type ImageProps = BaseImageProps & {};
