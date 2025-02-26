import { useState, useEffect } from 'react';
import { Button, Typography, Box, Paper } from '@mui/material';

export default function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrev,
  currentQuestion,
  totalQuestions,
  onExit
}) {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(!!selectedAnswer);
  }, [selectedAnswer]);

  const handleAnswer = (option) => {
    if (answered) return; // Prevent changing answer
    const isCorrect = option === question.answer;
    onAnswer(option, isCorrect);
    setAnswered(true);
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  if (!question) return null;

  return (
    <Box sx={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
      <Button
        variant="contained"
        onClick={onExit}
        sx={{
          mb: 2,
          backgroundColor: 'var(--danger)',
          '&:hover': {
            backgroundColor: 'var(--danger-glow)'
          }
        }}
      >
        Exit Quiz
      </Button>

      <Typography variant="h6" gutterBottom sx={{ color: 'var(--text-primary)' }}>
        Question {currentQuestion}/{totalQuestions}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ color: 'var(--text-primary)' }}>
        {question.question}
      </Typography>

      {question.code && (
        <Box
          component="pre"
          sx={{
            backgroundColor: 'var(--bg-code)',
            color: 'var(--text-code)',
            fontStyle: 'italic',
            padding: 2,
            borderRadius: 1,
            overflowX: 'auto'
          }}
        >
          <Typography variant="body2" component="code">
            {question.code}
          </Typography>
        </Box>
      )}

      <Box mt={2}>
        {question.shuffledOptions.map((option, index) => (
          <Paper
            key={index}
            onClick={() => handleAnswer(option)}
            sx={{
              padding: 2,
              marginBottom: 2,
              cursor: answered ? 'default' : 'pointer',
              backgroundColor: answered
                ? option === question.answer
                  ? 'var(--success)'
                  : option === selectedAnswer
                    ? '#ff6b6b'
                    : 'var(--card-background)'
                : 'var(--card-background)',
              color: answered && (option === question.answer || option === selectedAnswer)
                ? '#fff'
                : 'var(--text-primary)',
              '&:hover': {
                backgroundColor: answered
                  ? option === question.answer
                    ? 'var(--success)'
                    : option === selectedAnswer
                      ? '#ff6b6b'
                      : 'var(--card-background)'
                  : 'var(--hover-color)'
              },
              opacity: answered && option !== selectedAnswer && option !== question.answer ? 0.7 : 1
            }}
          >
            <Typography variant="body1">
              <strong>{optionLabels[index]}.</strong> {option}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          onClick={onPrev}
          disabled={currentQuestion === 1}
          sx={{
            backgroundColor: 'var(--secondary)',
            '&:hover': {
              backgroundColor: 'var(--primary)'
            }
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={!answered}
          sx={{
            backgroundColor: 'var(--primary)',
            '&:hover': {
              backgroundColor: 'var(--secondary)'
            }
          }}
        >
          {currentQuestion === totalQuestions ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}