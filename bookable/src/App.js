import { useEffect, useState } from 'react';
import axios from 'axios';
import Books from './components/Books';
import './App.css';

const API_URL = 'http://localhost:3000/api/v1/books';

const getAPIData = async () => {
  const response = await axios.get(API_URL);
  const data = response.data;

  return data;
};

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => mounted && setBooks(items));
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
