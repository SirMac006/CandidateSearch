import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Search Candidates</Link></li>
        <li><Link to="/SavedCandidates">Saved Candidates</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

