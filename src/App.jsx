import { Container } from '@mui/material';
import QuizManager from './components/QuizManager';

function App() {
  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--background)' }}>
      <QuizManager />
    </Container>
  );
}

export default App;