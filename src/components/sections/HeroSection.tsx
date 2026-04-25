import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { landingConfig } from "../../config/landingConfig";

const benefits = [
  "Menos retrabalho na mesa",
  "Menos erro de chaveamento",
  "Mais velocidade no evento",
  "Experiência profissional para atletas e público",
];

export function HeroSection() {
  return (
    <Grid
      container
      spacing={6}
      alignItems="center"
      sx={{ minHeight: { xs: "auto", md: "78vh" }, py: { xs: 6, md: 10 } }}
    >
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack spacing={3}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: 42, md: 72 },
              lineHeight: 0.95,
            }}
          >
            Organize campeonatos de capoeira sem planilhas, sem caos
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 620, lineHeight: 1.5 }}
          >
            Da inscrição à arbitragem, tudo em um só lugar.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              startIcon={<WhatsAppIcon />}
              href={landingConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ px: 4, py: 1.5 }}
            >
              Falar no WhatsApp
            </Button>

            <Button
              size="large"
              variant="outlined"
              color="secondary"
              startIcon={<PlayCircleOutlineIcon />}
              href={landingConfig.demoUrl}
              sx={{ px: 4, py: 1.5 }}
            >
              Ver demonstração
            </Button>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <Card
          sx={{
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="overline" color="secondary">
              Sistema para evento real
            </Typography>

            <Typography variant="h4" fontWeight={900} sx={{ mt: 1 }}>
              Inscrição, operação, arbitragem e telão conectados.
            </Typography>

            <Stack spacing={2} sx={{ mt: 4 }}>
              {benefits.map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Typography fontWeight={700}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
