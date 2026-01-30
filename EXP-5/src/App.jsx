import React, { Suspense, useState } from 'react';

const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h1>Lazy Loading Demo</h1>

      <button onClick={() => setShowDashboard(true)}>
        Load Dashboard
      </button>

      {showDashboard && (
        <Suspense fallback={<h3>Loading Dashboard...</h3>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}

export default App;
