interface Candidate {
  login: string;
  avatar_url: string;
}

interface CandidateCardProps {
  candidate: Candidate;
  isSaved: boolean;
  onSave: (candidate: Candidate) => void;
  onRemove: (candidate: Candidate) => void;
}

const CandidateCard = ({ candidate, isSaved, onSave, onRemove }: CandidateCardProps) => {
  return (
    <div>
      <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} width="100" />
      <h2>{candidate.login}</h2>
      {isSaved ? (
        <button onClick={() => onRemove(candidate)}>Remove</button>
      ) : (
        <button onClick={() => onSave(candidate)}>Save</button>
      )}
    </div>
  );
};

export default CandidateCard;
