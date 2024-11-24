import { FaHeart, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>TravelGuide</h3>
          <p>Discover the world's most amazing places</p>
        </div>
        
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <a href="#github"><FaGithub /></a>
            <a href="#twitter"><FaTwitter /></a>
            <a href="#instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>Made with <FaHeart className={styles.heart} /> by TravelGuide Team</p>
      </div>
    </footer>
  );
}

export default Footer;