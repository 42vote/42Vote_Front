import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const nav = useNavigate();

  return (
    <div id="not-found">
        <div>404</div>
        <div>Not Found</div>
        <button onClick={() => nav('/main')}>Home</button>
    </div>
  );
};

export default NotFound;
