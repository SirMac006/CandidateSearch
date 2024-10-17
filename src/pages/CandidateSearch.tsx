import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const result = await searchGithub();
      setCandidates(result);
    };
    fetchCandidates();
  }, []);

  const saveCandidate = (candidate: Candidate) => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    // Check if candidate is already saved to prevent duplicates
    const isAlreadySaved = savedCandidates.some((saved: Candidate) => saved.id === candidate.id);
    if (!isAlreadySaved) {
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      alert(`${candidate.login} has been saved.`);
    } else {
      alert(`${candidate.login} is already saved.`);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.login}</a>
            <button onClick={() => saveCandidate(candidate)}>Save Candidate</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
