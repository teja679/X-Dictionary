import { useState } from 'react';
import './App.css';
import { dictionary } from './dictionaryState';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    const responseData = dictionary.find(item => item.word.toLowerCase() === inputValue.toLowerCase())
    if (responseData) {
      setResponse(responseData.meaning);
      setInputValue('');
    } else {
      console.log('Search result not found.')
      alert('Search result not found.')
    }
  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='Search for a word...' />
        <button type='submit'>Search</button>
      </form>
      <h3>Definition: </h3>

      <p>{response}</p>
    </div>
  );
}

export default App;
