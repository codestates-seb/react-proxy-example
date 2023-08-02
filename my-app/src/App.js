import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import Footer from './components/Footer';

import TodoTable from './components/TodoTable'
import TodoDisplayBoard from './components/TodoDisplayBoard';
import CreateTodo from './components/CreateTodo'; 
import { getAllTodos, createTodo } from './services/TodoService'


function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const handleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  const [newTodo, setNewTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleTodoSubmit = () => {
    createTodo(newTodo)
      .then(() => {
        setNumberBooks(numberOfTodos+1);
    });
}

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        setTodos(data);
        setNumberTodos(data.length);
      });
  }

  const handleTodoOnChangeForm = (e) => {
    let inputData = newTodo;
    if (e.target.name === 'todo') {
      newTodo.todo = e.target.value;
    } else if (e.target.name === 'category') {
      newTodo.category = e.target.value;
    } else if (e.target.name === 'complete') {
      newTodo.isCompleted = e.target.value === "true" ? true : false; 
    }
    setNewTodo(inputData);
}
  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <div className ="section">
        <div className="book">
        <CreateBook 
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
        />
        <BookTable books={books} />
        </div>
        <div className="todos">
        <CreateTodo 
          newTodo={newTodo}
          handleTodoOnChangeForm={handleTodoOnChangeForm}
          handleTodoSubmit={handleTodoSubmit}
        />
        <TodoDisplayBoard 
          numberOfTodos={numberOfTodos} 
          getAllTodo={getAllTodo} 
        />
        <TodoTable todos={todos} />
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
