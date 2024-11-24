import { useState } from 'react';
import { Link } from 'react-router-dom';
import { destinations as initialDestinations } from '../data/destinations';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import styles from '../styles/AdminDashboard.module.css';

function AdminDashboard() {
  const [destinations] = useState(initialDestinations);

  const handleDelete = (id) => {
    // This would typically make an API call to your Django backend
    console.log('Delete destination:', id);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Admin Dashboard</h1>
        <Link to="/add-destination" className={styles.addButton}>
          <FaPlus /> Add New Destination
        </Link>
      </div>

      <div className={styles.destinationsList}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map(destination => (
              <tr key={destination.id}>
                <td>{destination.name}</td>
                <td>{destination.category}</td>
                <td>{destination.rating}</td>
                <td className={styles.actions}>
                  <button className={styles.editButton}>
                    <FaEdit /> Edit
                  </button>
                  <button 
                    className={styles.deleteButton}
                    onClick={() => handleDelete(destination.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;