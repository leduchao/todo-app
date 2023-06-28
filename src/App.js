import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>

      <input type='text' className='enter-job' placeholder='Add your new todo' />
      <input type='button' className='add-job' value={'ADD'} />

      <input type='button' className='job' value={'Buy a new laptop'} />
      <input type='button' className='job' value={'Buy a new laptop'} />
      <input type='button' className='job' value={'Buy a new laptop'} />
      <input type='button' className='job' value={'Buy a new laptop'} />
      <input type='button' className='job' value={'Buy a new laptop'} />
      
      <div className='footer'>
        <p>You have <span>5</span> pending tasks</p>
        <input type='button' className='clear-all' value={'CLEAR ALL'} />
      </div>
    </div>
  );
}

export default App;
