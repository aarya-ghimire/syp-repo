import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Header.module.css';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className={styles.header}>
      <h1>Travel Destinations</h1>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </header>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;