import { Typography } from "@/components/common";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";
import * as React from "react";

export const ThemeButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>((props, ref) => {
  const { className, ...restProps } = props;

  const { isDarkTheme, setTheme } = useTheme();

  const handleToggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <button
      ref={ref}
      {...restProps}
      className={cn("flex items-center gap-2 cursor-default", className)}
      onClick={handleToggleTheme}
    >
      <Typography component="span" level="p5" fontWeight="xl">
        Theme:
      </Typography>
      {isDarkTheme ? "🌙" : "☀️"}
    </button>
  );
});
ThemeButton.displayName = "ThemeButton";
