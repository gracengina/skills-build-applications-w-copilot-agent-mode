
import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-warning text-dark">
          <h2 className="mb-0">Leaderboard</h2>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr key={entry.id || idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{entry.name || '-'}</td>
                  <td>{entry.score || '-'}</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2">View</button>
                    <button className="btn btn-warning btn-sm">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
