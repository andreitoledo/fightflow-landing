import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import TvIcon from "@mui/icons-material/Tv";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Capoeira%20FightFlow";

const features = [
  {
    icon: <HowToRegIcon fontSize="large" />,
    title: "Inscrições organizadas",
    description:
      "Centralize atletas, categorias e dados do evento sem depender de planilhas soltas.",
  },
  {
    icon: <SportsKabaddiIcon fontSize="large" />,
    title: "Operação de lutas",
    description:
      "Controle partidas, resultados, chaves e andamento do campeonato em uma única tela.",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: "Arbitragem digital",
    description:
      "Votação por bandeiras ou notas, com fluxo pensado para eventos reais de capoeira.",
  },
  {
    icon: <TvIcon fontSize="large" />,
    title: "Telões ao vivo",
    description:
      "Exiba chaveamento, placar e informações do evento com visual moderno para o público.",
  },
];

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(255,59,48,0.22), transparent 35%), #070707",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          component="header"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 3 }}
        >
          <Typography variant="h6" fontWeight={900}>
            Capoeira FightFlow
          </Typography>

          <Button
            variant="outlined"
            color="primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </Button>
        </Stack>

        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ minHeight: { xs: "auto", md: "78vh" }, py: { xs: 6, md: 10 } }}
        >
          <Grid item xs={12} md={7}>
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
                  href={WHATSAPP_URL}
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
                  sx={{ px: 4, py: 1.5 }}
                >
                  Ver demonstração
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
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
                  {[
                    "Menos retrabalho na mesa",
                    "Menos erro de chaveamento",
                    "Mais velocidade no evento",
                    "Experiência profissional para atletas e público",
                  ].map((item) => (
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

        <Box component="section" sx={{ py: 8 }}>
          <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: 34, md: 48 } }}>
            Feito para tirar o campeonato do improviso
          </Typography>

          <Grid container spacing={3}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ color: "primary.main", mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={900} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

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
            Fale direto no WhatsApp e veja como organizar seu campeonato com
            mais controle, velocidade e aparência profissional.
          </Typography>

          <Button
            size="large"
            variant="contained"
            color="primary"
            startIcon={<WhatsAppIcon />}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 5, py: 1.6 }}
          >
            Falar no WhatsApp
          </Button>
        </Box>

        <Box component="footer" sx={{ py: 4, textAlign: "center" }}>
          <Typography color="text.secondary">
            © {new Date().getFullYear()} Capoeira FightFlow. Todos os direitos
            reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
