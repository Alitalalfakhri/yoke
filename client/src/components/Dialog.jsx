
import '../styles/dialog.css';

export default function Dialog({ isOpen, onClose, onConfirm, productName }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2 className="dialog-title">هل أنت متأكد من إضافة {productName} إلى السلة؟</h2>
        <div className="dialog-buttons">
          <button className="dialog-button confirm" onClick={onConfirm}>
            إضافة إلى السلة
          </button>
          <button className="dialog-button cancel" onClick={onClose}>
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
