import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaHome, FaUserCog, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import styles from '../../styles/Navbar.module.css';

function Navbar() {
  const { isAdmin, login, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">TravelGuide</Link>
      </div>
      
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            <FaHome /> Home
          </Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link to="/admin" className={styles.navLink}>
                <FaUserCog /> Admin Dashboard
              </Link>
            </li>
            <li>
              <Link to="/add-destination" className={styles.navLink}>
                Add Destination
              </Link>
            </li>
          </>
        )}
      </ul>

      <div className={styles.auth}>
        {!isAdmin ? (
          <button onClick={login} className={styles.authButton}>
            <FaSignInAlt /> Admin Login
          </button>
        ) : (
          <button onClick={logout} className={styles.authButton}>
            <FaSignOutAlt /> Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;