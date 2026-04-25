import { Button, Stack, Typography } from "@mui/material";
import { landingConfig } from "../../config/landingConfig";
import { trackEvent } from "../../core/utils/tracking";

export function Header() {
  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ py: 3 }}
    >
      <Typography variant="h6" fontWeight={900}>
        {landingConfig.brandName}
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        href={landingConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
                trackEvent("whatsapp_click", {
                  location: "header",
                });
              }}
      >
        Falar no WhatsApp
      </Button>
    </Stack>
  );
}
