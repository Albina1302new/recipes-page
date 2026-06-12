import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3> Recipe App</h3>

        <p>Find inspiration for your next meal.</p>

        <p>© 2026 Recipe App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
