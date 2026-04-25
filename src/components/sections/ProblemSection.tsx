import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

export function ProblemSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: 32, md: 46 } }}>
        Seu evento ainda está assim?
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              backgroundColor: "rgba(255,0,0,0.08)",
              border: "1px solid rgba(255,0,0,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={900} gutterBottom>
                ❌ Problema
              </Typography>

              <Typography>
                Planilhas espalhadas, grupos de WhatsApp, erros de chaveamento,
                demora na mesa e confusão no evento.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              backgroundColor: "rgba(0,255,100,0.06)",
              border: "1px solid rgba(0,255,100,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={900} gutterBottom>
                ✅ Solução
              </Typography>

              <Typography>
                O FightFlow centraliza tudo: inscrições, operação, arbitragem e
                telão em um único sistema.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
