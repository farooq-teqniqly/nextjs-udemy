import ModelCard from '../components/ModelCard';
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';

const StyledModelCard = styled(ModelCard)(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  box-shadow: ${theme.shadows[1]};
  border-radius: ${theme.shape.borderRadius}px;
  padding: ${theme.spacing(2)};
  height: '100%';
  display: 'flex';
  flexDirection: 'column';
  `
);

function ModelsPage() {
  const models = [
    'Edge',
    'Expedition',
    'Explorer',
    'Escape',
    'Ranger',
    'Maverick',
    'F-150',
    'Bronco',
    'Bronco Sport',
  ];

  return (
    <Container maxWidth="md">
      <Grid container spacing={4} sx={{ padding: '20px 0' }}>
        {models.map((model) => (
          <Grid item key={model} xs={12} sm={6} md={4}>
            <StyledModelCard modelName={model}></StyledModelCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ModelsPage;
