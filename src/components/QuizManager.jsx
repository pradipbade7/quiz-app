import { useState } from 'react';
import { Container, Box } from '@mui/material';
import QuizStart from './QuizStart';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import apiData from '../data/api_data.json';
import csharpData from '../data/csharp_data.json';
import javascriptData from '../data/javascript_data.json';
import sqlData from '../data/sql_data.json';
import htmlData from '../data/html_data.json';
import pythonData from '../data/python_data.json';

const quizData = {
    API: apiData,
    CSharp: csharpData,
    JavaScript: javascriptData,
    SQL: sqlData,
    HTML: htmlData,
    Python: pythonData
};

export default function QuizManager() {
    const [quizConfig, setQuizConfig] = useState({
        selectedQuiz: null,
        questionCount: 10
    });
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answerHistory, setAnswerHistory] = useState([]);
    const [quizState, setQuizState] = useState('start'); // 'start', 'quiz', 'result'

    const startQuiz = (quizType, questionCount) => {
        const questionsWithShuffledOptions = quizData[quizType].questions
            .map(question => ({
                ...question,
                shuffledOptions: [...question.options].sort(() => 0.5 - Math.random())
            }))
            .sort(() => 0.5 - Math.random())
            .slice(0, questionCount);

        setSelectedQuestions(questionsWithShuffledOptions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setAnswerHistory([]);
        setQuizConfig({ selectedQuiz: quizType, questionCount });
        setQuizState('quiz');
    };

    const handleAnswer = (answer, isCorrect) => {
        const newAnswerHistory = [...answerHistory];
        if (newAnswerHistory[currentQuestionIndex]) {
            const previousAnswer = newAnswerHistory[currentQuestionIndex];
            if (previousAnswer.isCorrect && !isCorrect) {
                setScore(score - 1);
            } else if (!previousAnswer.isCorrect && isCorrect) {
                setScore(score + 1);
            }
        } else if (isCorrect) {
            setScore(score + 1);
        }
        newAnswerHistory[currentQuestionIndex] = { answer, isCorrect };
        setAnswerHistory(newAnswerHistory);
    };

    const handleNext = () => {
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            setQuizState('result');
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const exitQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setAnswerHistory([]);
        setQuizConfig({
            selectedQuiz: null,
            questionCount: 10
        });
        setQuizState('start');
    };

    return (
        <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--background)' }}>
            <Box sx={{ width: '100%', mb: 4 }}>
                <img src="/logo.png" alt="Quiz App Logo" style={{ width: '50px', position:'absolute', left:'10px', top:'10px' }} /> {/* Use public path */}
            
            {quizState === 'start' && (
                <QuizStart
                    onStart={(questionCount) => startQuiz(quizConfig.selectedQuiz, questionCount)}
                    totalQuestions={quizConfig.selectedQuiz ? quizData[quizConfig.selectedQuiz].questions.length : 0}
                    onSelectQuiz={(quiz) => setQuizConfig({ ...quizConfig, selectedQuiz: quiz })}
                    selectedQuiz={quizConfig.selectedQuiz}
                />
            )}
            {quizState === 'quiz' && (
                <QuizQuestion
                    question={selectedQuestions[currentQuestionIndex]}
                    selectedAnswer={answerHistory[currentQuestionIndex]?.answer}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    currentQuestion={currentQuestionIndex + 1}
                    totalQuestions={selectedQuestions.length}
                    onExit={exitQuiz}
                />
            )}
            {quizState === 'result' && (
                <QuizResult
                    score={score}
                    totalQuestions={selectedQuestions.length}
                    onRestart={() => startQuiz(quizConfig.selectedQuiz, quizConfig.questionCount)}
                    onExit={exitQuiz}
                    quizConfig={quizConfig}
                />
            )}
            </Box>
        </Container>
    );
}