import PropTypes from 'prop-types';
import DestinationCard from '../DestinationCard/DestinationCard';
import styles from '../../styles/DestinationList.module.css';

function DestinationList({ destinations }) {
  return (
    <div className={styles.destinationList}>
      {destinations.map(destination => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}

DestinationList.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DestinationList;