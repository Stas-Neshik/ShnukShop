import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Магазн шнюка. Все права защищены шнюком.</p>
      <div className={styles.socialLinks}>
        <a 
        href="https://t.me/StanislavNeshik" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.linkStyle}
      >
        Написать в Telegram
      </a>
      </div>
    </footer>
  );
};

export default Footer;
