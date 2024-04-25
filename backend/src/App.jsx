import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Task from './components/Task'
import CreateTask from './components/CreateTask'
import UpdateTask from './components/UpdateTask'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1>Task Management</h1>
      <BrowserRouter >
          <Routes>
            <Route path='/' element={<Task />}>Home</Route>
            <Route path='/create' element={<CreateTask />}>Create</Route>
            <Route path='/update/:id' element={<UpdateTask />}>Edit</Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
