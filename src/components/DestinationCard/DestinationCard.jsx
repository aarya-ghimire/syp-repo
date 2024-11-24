import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/DestinationCard.module.css';

function DestinationCard({ destination }) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // This would typically make an API call to your Django backend
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <div className={styles.card}>
      <img src={destination.image} alt={destination.name} className={styles.image} />
      <div className={styles.content}>
        <h2>{destination.name}</h2>
        <span className={styles.category}>{destination.category}</span>
        <p>{destination.description}</p>
        <div className={styles.rating}>
          Rating: {destination.rating} / 5
        </div>
        
        <button 
          onClick={() => setShowComments(!showComments)}
          className={styles.commentToggle}
        >
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>

        {showComments && (
          <div className={styles.comments}>
            <form onSubmit={handleSubmitComment}>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className={styles.commentInput}
              />
              <button type="submit" className={styles.commentButton}>
                Add Comment
              </button>
            </form>
            
            {destination.comments.map((comment, index) => (
              <div key={index} className={styles.comment}>
                {comment}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default DestinationCard;