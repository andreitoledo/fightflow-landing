import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const steps = [
  "Crie seu evento",
  "Cadastre categorias e atletas",
  "Gerencie lutas e arbitragem",
  "Exiba tudo no telão ao vivo",
];

export function HowItWorksSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: 32, md: 46 } }}>
        Como funciona
      </Typography>

      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid key={step} size={{ xs: 12, md: 3 }}>
            <Card
              sx={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <CardContent>
                <Typography variant="h4" color="primary" fontWeight={900}>
                  {index + 1}
                </Typography>

                <Typography fontWeight={700} sx={{ mt: 1 }}>
                  {step}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
