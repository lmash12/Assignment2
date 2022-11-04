import React,{Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { ErrorBoundary } from 'react-error-boundary';
import FourOhFour from './components/FourOhFour';
import GetUsers from './components/GetUsers';




function ErrorFallBack ({error}) {
  return (
      <div role="alert">
          <p>
            <h1>Something went wrong</h1>
          </p>
          <pre style={{color: 'red'}}>
              {error.message}
          </pre>

      </div>
  )
}






function App() {

  return (
    <div className='app'>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/users" element={<GetUsers/>} />
      <Route path="*" element={<FourOhFour/>} />
     </Routes>
      </ErrorBoundary>
    </div>

  );
}

export default App;
