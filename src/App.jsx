import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    try {
      const saved = localStorage.getItem('feedback');
      return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
    } catch (error) {
      console.error('Error parsing feedback from localStorage:', error);
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('feedback', JSON.stringify(feedback));
    } catch (error) {
      console.error('Error saving feedback to localStorage:', error);
    }
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (feedbackType) => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <main className="app">
      <section className="panel">
        <Description />
        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </section>
    </main>
  );
}

