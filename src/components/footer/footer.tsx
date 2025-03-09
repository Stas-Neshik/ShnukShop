import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Магазн шнюка. Все права защищены шнюком.</p>
      <div className={styles.socialLinks}>
        <a href="#">Instagram</a> | <a href="#">Facebook</a> |
        <a href="#"> Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
