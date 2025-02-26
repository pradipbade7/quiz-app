import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

export default function QuizResult({ score, totalQuestions, onRestart, onExit, quizConfig }) {
  const navigate = useNavigate();
  const { quizType, questionCount } = useParams();
  const percentage = Math.round((score / totalQuestions) * 100);

  const handleRestart = () => {
    onRestart();
  };

  const handleExit = () => {
    onExit();
  };

  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom sx={{ color: 'var(--text-primary)' }}>
        Quiz Complete!
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: 'var(--text-secondary)' }}>
        {quizConfig.selectedQuiz} Quiz
      </Typography>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          color: percentage >= 70 ? 'var(--success)' : 'var(--text-primary)'
        }}
      >
        {percentage}%
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'var(--text-secondary)' }}>
        You scored {score} out of {totalQuestions}
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleRestart}
        sx={{ 
          mt: 2,
          mr: 2,
          backgroundColor: 'var(--primary)',
          '&:hover': {
            backgroundColor: 'var(--secondary)'
          }
        }}
      >
        Try Again
      </Button>
      <Button 
        variant="contained" 
        onClick={handleExit}
        sx={{ 
          mt: 2,
          backgroundColor: 'var(--danger)',
          '&:hover': {
            backgroundColor: 'var(--danger-glow)'
          }
        }}
      >
        Exit Quiz
      </Button>
    </Box>
  );
}