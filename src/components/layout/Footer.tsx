import { Box, Typography } from "@mui/material";
import { landingConfig } from "../../config/landingConfig";

export function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: "center" }}>
      <Typography color="text.secondary">
        © {new Date().getFullYear()} {landingConfig.brandName}. Todos os
        direitos reservados.
      </Typography>
    </Box>
  );
}
