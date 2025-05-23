import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>📍 العنوان</h2>
          <p>السنك، شارع الغسالات</p>
        </div>

        <div className="footer-section">
          <h2>📞 رقم الهاتف</h2>
          <p>+964 7813530010</p>
        </div>

        <div className="footer-section">
          <h2>تابعنا</h2>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
