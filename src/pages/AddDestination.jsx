import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/AddDestination.module.css';

function AddDestination() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState({
    name: '',
    description: '',
    category: '',
    image: '',
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically make an API call to your Django backend
    console.log('New destination:', destination);
    navigate('/admin');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.addDestination}>
      <h1>Add New Destination</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Destination Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={destination.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={destination.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Beach">Beach</option>
            <option value="Mountains">Mountains</option>
            <option value="City">City</option>
            <option value="Island">Island</option>
            <option value="Nature">Nature</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={destination.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={destination.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            value={destination.rating}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Add Destination
        </button>
      </form>
    </div>
  );
}

export default AddDestination;