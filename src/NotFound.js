import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Oh no...</h2>
      <p>It looks like we can't find this page :( </p>
      <Link to='/'>Back to home it is! </Link>
    </div>
  );
}

export default NotFound;
