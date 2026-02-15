import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <h1 className="text-brand/20 text-9xl font-bold">404</h1>
      <p>Not found</p>
      <Link
        to="/"
        className="bg-brand mt-8 rounded-lg px-6 py-3 font-medium transition-transform hover:scale-105 active:scale-95"
      >
        Back to home
      </Link>
    </div>
  );
};
