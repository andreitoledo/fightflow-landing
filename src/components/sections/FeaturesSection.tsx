import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { features } from "../../data/features";

export function FeaturesSection() {
  return (
    <Box component="section" id="demo" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: 34, md: 48 } }}>
        Feito para tirar o campeonato do improviso
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.title}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "rgba(255,255,255,0.045)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>

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
  );
}
