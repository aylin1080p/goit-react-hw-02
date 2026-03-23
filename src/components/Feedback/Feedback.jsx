export default function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
  return (
    <div className="stats">
      <p>Good: <span className="value">{good}</span></p>
      <p>Neutral: <span className="value">{neutral}</span></p>
      <p>Bad: <span className="value">{bad}</span></p>
      <p>Total: <span className="value">{totalFeedback}</span></p>
      <p>Positive: <span className="value">{positiveFeedback}%</span></p>
    </div>
  );
}
