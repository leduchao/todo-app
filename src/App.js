import { useState } from 'react';
import './App.css';

function App() {
  // const storage = JSON.parse(localStorage.getItem('jobs'));

  const [job, setJob] = useState('');

  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) ?? [];
    return storageJobs;
  });

  const [isDone, setIsDone] = useState(true);

  const addJob = () => {
    if (!job) {
      alert('Enter an item!');
    } else {
      setJobs(prev => {
        const newJobs = [...prev, job]
  
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jsonJobs);
  
        return newJobs;
      });
      setJob('');
    }

  }

  const clearAllJob = () => {
    localStorage.clear();
    setJobs([]);
  }

  const jobFinished = (e) => {
    setIsDone(done => !done);

    e.target.style.color = isDone ? 'silver' : 'black';
  }

  const deleteJob = (index) => {
    const storage = JSON.parse(localStorage.getItem('jobs'))

    storage.splice(index, 1);

    localStorage.setItem('jobs', JSON.stringify(storage));
    const newStorage = JSON.parse(localStorage.getItem('jobs')) ?? [];
    
    setJobs(newStorage);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <input type='text' className='enter-job' placeholder='Add your new todo'
        value={job} onChange={e => setJob(e.target.value)} />
      <input type='submit' className='add-job' value={'ADD'} onClick={addJob} />

      {jobs.map((job, index) => (
        <div className='list-jobs'>
          <input type='button' className='job' key={index} value={job}
            onClick={(e) => jobFinished(e)}/>
          {/* <input type='checkbox' className='job-action done-btn' value={'DONE'}/> */}
          <input type='submit' className='job-action delete-btn' value={'DELETE'}
            onClick={() => deleteJob(index)}/>
        </div>
      ))}
      
      <div className='footer'>
        <p>You have <span>{jobs.length}</span> pending tasks</p>
        <input type='submit' className='clear-all' value={'CLEAR ALL'}
          onClick={clearAllJob} />
      </div>
    </div>
  );
}

export default App;
