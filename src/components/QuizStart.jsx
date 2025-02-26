import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { FaDatabase, FaHtml5, FaJs, FaPython, FaNetworkWired } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const quizIcons = {
  API: <FaNetworkWired size={60} color="#007bff" />,
  CSharp: <TbBrandCSharp size={60} color="#9b4f96" />,
  JavaScript: <FaJs size={60} color="#f7df1e" />,
  SQL: <FaDatabase size={60} color="#00758f" />,
  HTML: <FaHtml5 size={60} color="#e34f26" />,
  Python: <FaPython size={60} color="#3776ab" />
};

export default function QuizStart({ onStart, totalQuestions, onSelectQuiz, selectedQuiz }) {
  const [questionCount, setQuestionCount] = useState(10);

  useEffect(() => {
    setQuestionCount(totalQuestions > 10 ? 10 : totalQuestions);
  }, [totalQuestions]);

  return (
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom sx={{ color: '#343a40', pb: 2 }}>
        Select Quiz Genre and Number of Questions
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(quizIcons).map((quiz) => (
          <Grid item xs={6} sm={4} md={4} key={quiz}>
            <Card
              onClick={() => onSelectQuiz(quiz)}
              sx={{
                border: selectedQuiz === quiz ? `2px solid var(--primary)` : 'none',
                backgroundColor: 'var(--card-background)',
                '&:hover': {
                  backgroundColor: 'var(--hover-color)'
                }
              }}
            >
              <CardActionArea>
                <Box display="flex" justifyContent="center" alignItems="center" height="140" 
                sx={{
                  pt: { xs: 1, sm: 2, md: 2 }  // Using MUI's spacing units (1 = 8px)
                }}>
                  {quizIcons[quiz]}
                </Box>
                <CardContent sx={{
                  p: { xs: 1, sm: 2, md: 2 }  // Using MUI's spacing units (1 = 8px)
                }}>
                  <Typography variant="h5" component="div" textAlign="center" sx={{ color: 'var(--text-primary)'
                    , fontSize: { xs: 15, sm: 20, md: 28 }}}>
                    {quiz}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedQuiz && (
        <>
          <Typography variant="h6" gutterBottom sx={{ mt: 4, color: 'var(--text-primary)' }}>
            Selected Quiz: {selectedQuiz} Quiz
          </Typography>
          <TextField
            label={`Number of Questions (max ${totalQuestions})`}
            type="number"
            value={questionCount}
            onChange={(e) => setQuestionCount(Math.min(totalQuestions, Math.max(1, parseInt(e.target.value) || 0)))}
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--border-color)',
                },
                '&:hover fieldset': {
                  borderColor: 'var(--primary)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'var(--text-secondary)',
              }
            }}
          />
          <Button
            variant="contained"
            onClick={() => onStart(questionCount)}
            sx={{
              backgroundColor: 'var(--primary)',
              '&:hover': {
                backgroundColor: 'var(--secondary)'
              }
            }}
          >
            Start Quiz
          </Button>
        </>
      )}
    </Box>
  );
}