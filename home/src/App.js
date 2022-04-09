import React, { useState } from 'react';
import Header from './Header';

const MyDefaultComponent = 
  React.lazy(() => import('./MyDefaultComponent'));

const App = () => {

  const [names, setNames] = useState(null);

  const onLoad = async () => {
    const names = await import('./names');
    const { makeUpperCase } = await import(
      './utilities' 
      /* webpackChunkName: "utilities" */
      );
    setNames(makeUpperCase(names.default));
  }
  return (
    <div>
      <Header />
      <div>Home</div>
      <button onClick={() => onLoad()}>Load</button>
      <div>{JSON.stringify(names)}</div>
      {
        MyDefaultComponent &&
        <React.Suspense fallback={<>loading</>}>
          <MyDefaultComponent />
        </React.Suspense>
      }
    </div>
  );
}

export default App;
