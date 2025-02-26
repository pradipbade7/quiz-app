# Quiz Application

A dynamic quiz application built with React that allows users to test their knowledge in various programming languages and technologies.

## 🚀 Features

- Multiple quiz categories (API, C#, JavaScript, SQL, HTML, Python)
- Customizable number of questions
- Score tracking
- Previous/Next question navigation
- Answer review functionality
- Code snippet support in questions
- Responsive design for all devices

## 🛠️ Technologies Used

### Frontend
- React 18
- Material-UI (MUI)
- React Icons
- CSS Variables for theming

### State Management
- React useState for local state
- useEffect for side effects
- Custom hooks for quiz logic

### Styling
- Material-UI's sx prop for responsive design
- CSS Variables for theme customization
- Responsive breakpoints
- Custom styling for code blocks

## 📦 Installation

1. Clone the repository:
```sh
git clone https://github.com/yourusername/quiz-app.git
```

2. Install dependencies:
```sh
cd quiz-app
npm install
```

3. Start the development server:
```sh
npm run dev
```

## 📂 Project Structure
quiz-app/
├── src/
│   ├── components/
│   │   ├── QuizManager.jsx
│   │   ├── QuizStart.jsx
│   │   ├── QuizQuestion.jsx
│   │   └── QuizResult.jsx
│   ├── data/
│   │   ├── api_data.json
│   │   ├── csharp_data.json
│   │   └── ...
│   ├── App.jsx
│   └── index.css

### 🧩 Component-Based Architecture
- **QuizManager**: Manages the overall quiz state and logic, including starting the quiz, handling answers, and navigating between questions.
- **QuizStart**: Handles the quiz selection and configuration, allowing users to choose the quiz category and number of questions.
- **QuizQuestion**: Displays individual quiz questions, handles user answers, and provides navigation between questions.
- **QuizResult**: Shows the final score and allows users to restart the quiz or exit.

### 🎨 Styling Features
- Theme customization using CSS variables
- Responsive design using MUI breakpoints
- Custom styling for code blocks
- Dynamic color schemes
- Hover effects and transitions

### 🔄 State Management
- Quiz configuration state
- Question/Answer tracking
- Score calculation
- Navigation state
- Answer history

## 🚀 Future Enhancements

### Authentication & User Profiles
- User registration/login
- Progress tracking
- Score history

### Advanced Features
- Timer for each question
- Difficulty levels
- Explanation for answers
- Score leaderboard

### Content Improvements
- More quiz categories
- Image-based questions
- Interactive code exercises
- Multiple choice vs True/False

### Technical Enhancements
- Redux/Context for state management
- Backend integration
- Progressive Web App (PWA)
- Offline support

### UI/UX Improvements
- Dark/Light theme toggle
- Animations for transitions
- Progress indicators
- Accessibility improvements

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Material-UI for the component library
- React Icons for the icon set
- The React community for inspiration and support