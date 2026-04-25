import { Box, Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { landingConfig } from "../../config/landingConfig";
import { trackEvent } from "../../core/utils/tracking";

export function FinalCtaSection() {
  return (
    <Box
      component="section"
      sx={{
        my: 8,
        p: { xs: 4, md: 6 },
        borderRadius: 5,
        background:
          "linear-gradient(135deg, rgba(255,59,48,0.25), rgba(250,204,21,0.12))",
        border: "1px solid rgba(255,255,255,0.1)",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 46 } }}>
        Quer testar o FightFlow no seu próximo evento?
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2, mb: 4 }}>
        Fale direto no WhatsApp e veja como organizar seu campeonato com mais
        controle, velocidade e aparência profissional.
      </Typography>

      <Button
        size="large"
        variant="contained"
        color="primary"
        startIcon={<WhatsAppIcon />}
        href={landingConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackEvent("whatsapp_click", {
            location: "cta",
          });
        }}
        sx={{ px: 5, py: 1.6 }}
      >
        Falar no WhatsApp
      </Button>
    </Box>
  );
}
