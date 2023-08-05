import { Link } from 'react-router-dom';
import { Button } from '../../components';

const Error: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="max-w-lg text-center">
        <h1 className="mb-8 text-9xl font-extrabold text-primary">404</h1>
        <p className="mb-8 px-4 text-lg font-medium">
        Apologies, but the page you are trying to access cannot be found.
        </p>
        <Link to="/">
          <Button>Return to Homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
