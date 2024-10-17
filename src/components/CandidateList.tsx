import { useState } from 'react';
import CandidateCard from './CandidateCard';

interface Candidate {
  login: string;
  avatar_url: string;
}

interface CandidateListProps {
  candidates: Candidate[];
}

const CandidateList = ({ candidates }: CandidateListProps) => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );

  const handleSaveCandidate = (candidate: Candidate) => {
    const updatedSavedCandidates = [...savedCandidates, candidate];
    setSavedCandidates(updatedSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
  };

  const handleRemoveCandidate = (candidate: Candidate) => {
    const updatedSavedCandidates = savedCandidates.filter(c => c.login !== candidate.login);
    setSavedCandidates(updatedSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
  };

  return (
    <div>
      {candidates.map(candidate => (
        <CandidateCard
          key={candidate.login}
          candidate={candidate}
          isSaved={savedCandidates.some(c => c.login === candidate.login)}
          onSave={handleSaveCandidate}
          onRemove={handleRemoveCandidate}
        />
      ))}
    </div>
  );
};

export default CandidateList;
