import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  PositionProps,
  BorderRadiusProps,
  ShadowProps,
  BackgroundColorProps,
} from "styled-system";

export type GlassBoxProps = LayoutProps &
  TypographyProps &
  BackgroundProps &
  BorderProps &
  FlexboxProps &
  PositionProps &
  BackgroundColorProps &
  ShadowProps &
  BorderRadiusProps &
  SpaceProps & {
    gap?: string | number | string[] | number[];
  };
