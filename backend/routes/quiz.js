const express = require('express');
const router = express.Router();

// Simple in-memory store for demo
let quizzes = [];

/**
 * POST /api/quiz/generate
 * body: { prompt: "topic or prompt" }
 * Returns a generated quiz (stubbed)
 */
router.post('/generate', (req, res) => {
  const { prompt } = req.body;
  // Placeholder: replace with real AI integration
  const quiz = generateQuizFromPrompt(prompt);
  quizzes.push(quiz);
  res.json({ success: true, quiz });
});

router.get('/list', (req, res) => {
  res.json({ quizzes });
});

function generateQuizFromPrompt(prompt) {
  // Very simple rule-based stub for demo purposes
  return {
    id: Date.now(),
    title: `Quiz: ${prompt}`,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: `What is the basic idea of ${prompt}?`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        answer: 0
      },
      {
        id: 2,
        type: 'short',
        question: `Explain one application of ${prompt}.`
      }
    ]
  };
}

module.exports = router;
