import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <Box
        component="img"
        alt="Netflix Logo"
        src="/assets/netflix-logo.png"
        width={100}
        height={50}
        sx={{
          ...sx,
        }}
      />
    </RouterLink>
  );
}
