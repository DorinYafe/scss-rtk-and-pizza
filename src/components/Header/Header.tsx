import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header_container}>
      <div className={classes.header_wrapper}>
        <Link className={classes.header_link} to='/'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
