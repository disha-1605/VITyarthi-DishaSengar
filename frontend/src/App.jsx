import React, {useState} from 'react';
import axios from 'axios';

export default function App(){
  const [prompt, setPrompt] = useState('');
  const [quiz, setQuiz] = useState(null);

  async function generate(){
    const res = await axios.post('http://localhost:4000/api/quiz/generate', { prompt });
    setQuiz(res.data.quiz);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>QuickQuiz</h1>
      <div>
        <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Enter topic or prompt" style={{ width: 400 }}/>
        <button onClick={generate} style={{ marginLeft: 8 }}>Generate Quiz</button>
      </div>

      {quiz && (
        <div style={{ marginTop: 20 }}>
          <h2>{quiz.title}</h2>
          {quiz.questions.map(q => (
            <div key={q.id} style={{ marginBottom: 12 }}>
              <strong>{q.question}</strong>
              {q.type === 'mcq' && (
                <ul>
                  {q.options.map((o,i)=><li key={i}>{o}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
