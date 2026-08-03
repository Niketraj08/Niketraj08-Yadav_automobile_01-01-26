import { useState, useEffect } from 'react';
import './MockRazorpayModal.css';

export default function MockRazorpayModal({ isOpen, onClose, amount, orderNumber, onSuccess }) {
  const [step, setStep] = useState('methods'); // methods, card, upi, netbanking, processing, otp, success
  const [method, setMethod] = useState('');
  const [otp, setOtp] = useState('');
  const [cardData, setCardData] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep('methods');
      setMethod('');
      setOtp('');
      setSelectedBank('');
      setUpiId('');
      setCardData({ number: '', expiry: '', cvv: '', name: '' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePay = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('otp');
    }, 2000);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess({
          razorpay_payment_id: `pay_mock_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
          razorpay_signature: 'mock_signature_verified_by_apex',
        });
      }, 1500);
    }, 1500);
  };

  return (
    <div className="rzp-overlay">
      <div className="rzp-modal">
        {/* Header */}
        <div className="rzp-header">
          <div className="rzp-merchant-info">
            <span className="rzp-logo-text">razorpay <span className="secure">secure</span></span>
            <h2>Team Apex Gaming</h2>
            <p className="rzp-order-num">Order Ref: {orderNumber}</p>
          </div>
          <div className="rzp-amount">
            <span className="label">Amount to Pay</span>
            <span className="val">₹{amount.toLocaleString('en-IN')}</span>
          </div>
          {step !== 'processing' && step !== 'success' && (
            <button className="rzp-close" onClick={onClose}>&times;</button>
          )}
        </div>

        {/* Content Body */}
        <div className="rzp-body">
          {step === 'methods' && (
            <div className="rzp-step-methods">
              <h3>Select Payment Method</h3>
              <div className="rzp-methods-list">
                <button className="rzp-method-btn" onClick={() => { setMethod('card'); setStep('card'); }}>
                  <span className="icon">💳</span>
                  <div className="text">
                    <strong>Card</strong>
                    <span>Visa, MasterCard, RuPay, Maestro</span>
                  </div>
                </button>
                <button className="rzp-method-btn" onClick={() => { setMethod('upi'); setStep('upi'); }}>
                  <span className="icon">📱</span>
                  <div className="text">
                    <strong>UPI</strong>
                    <span>Google Pay, PhonePe, Paytm, BHIM</span>
                  </div>
                </button>
                <button className="rzp-method-btn" onClick={() => { setMethod('netbanking'); setStep('netbanking'); }}>
                  <span className="icon">🏦</span>
                  <div className="text">
                    <strong>Netbanking</strong>
                    <span>All popular Indian banks available</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 'card' && (
            <div className="rzp-step-form">
              <button className="rzp-back" onClick={() => setStep('methods')}>← Change Method</button>
              <h3>Enter Card Details</h3>
              <div className="rzp-form-group">
                <label>Card Number</label>
                <input
                  placeholder="4111 2222 3333 4444"
                  maxLength={19}
                  value={cardData.number}
                  onChange={(e) => setCardData({ ...cardData, number: e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                />
              </div>
              <div className="rzp-row">
                <div className="rzp-form-group">
                  <label>Expiry (MM/YY)</label>
                  <input
                    placeholder="12/28"
                    maxLength={5}
                    value={cardData.expiry}
                    onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                  />
                </div>
                <div className="rzp-form-group">
                  <label>CVV</label>
                  <input
                    type="password"
                    placeholder="123"
                    maxLength={3}
                    value={cardData.cvv}
                    onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                  />
                </div>
              </div>
              <div className="rzp-form-group">
                <label>Cardholder Name</label>
                <input
                  placeholder="John Doe"
                  value={cardData.name}
                  onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                />
              </div>
              <button
                className="rzp-pay-btn"
                disabled={!cardData.number || !cardData.expiry || !cardData.cvv}
                onClick={handlePay}
              >
                Pay ₹{amount.toLocaleString('en-IN')}
              </button>
            </div>
          )}

          {step === 'upi' && (
            <div className="rzp-step-form">
              <button className="rzp-back" onClick={() => setStep('methods')}>← Change Method</button>
              <h3>Enter UPI ID</h3>
              <div className="rzp-form-group">
                <label>UPI VPA ID</label>
                <input
                  placeholder="username@okaxis"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
              <p className="rzp-help-text">A payment request will be sent to your UPI app.</p>
              <button
                className="rzp-pay-btn"
                disabled={!upiId || !upiId.includes('@')}
                onClick={handlePay}
              >
                Pay ₹{amount.toLocaleString('en-IN')}
              </button>
            </div>
          )}

          {step === 'netbanking' && (
            <div className="rzp-step-form">
              <button className="rzp-back" onClick={() => setStep('methods')}>← Change Method</button>
              <h3>Select Bank</h3>
              <div className="rzp-bank-grid">
                {['SBI', 'HDFC', 'ICICI', 'AXIS', 'KOTAK', 'PNB'].map((bank) => (
                  <button
                    key={bank}
                    className={`rzp-bank-btn ${selectedBank === bank ? 'active' : ''}`}
                    onClick={() => setSelectedBank(bank)}
                  >
                    {bank}
                  </button>
                ))}
              </div>
              <button
                className="rzp-pay-btn"
                disabled={!selectedBank}
                onClick={handlePay}
              >
                Pay ₹{amount.toLocaleString('en-IN')}
              </button>
            </div>
          )}

          {step === 'processing' && (
            <div className="rzp-step-status">
              <div className="rzp-spinner"></div>
              <h3>Processing Transaction</h3>
              <p>Please do not refresh the page or click back.</p>
            </div>
          )}

          {step === 'otp' && (
            <form onSubmit={handleOtpSubmit} className="rzp-step-form">
              <h3>Secure OTP Verification</h3>
              <p className="rzp-help-text">A 6-digit OTP has been sent to your registered mobile number linked to this payment method.</p>
              <div className="rzp-form-group" style={{ textAlign: 'center' }}>
                <label style={{ textAlign: 'center' }}>Enter 6-Digit OTP</label>
                <input
                  className="rzp-otp-input"
                  placeholder="123456"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '8px' }}
                />
              </div>
              <p className="rzp-hint">Hint: Enter <strong>123456</strong> or any code to authorize demo payment.</p>
              <button
                type="submit"
                className="rzp-pay-btn"
                disabled={otp.length !== 6}
              >
                Verify & Complete Payment
              </button>
            </form>
          )}

          {step === 'success' && (
            <div className="rzp-step-status">
              <div className="rzp-success-icon">✓</div>
              <h3 style={{ color: '#2ecc71' }}>Payment Successful!</h3>
              <p>Redirecting you back to Team Apex Gaming...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="rzp-footer">
          <span>🔒 PCI-DSS Compliant Secure Checkout</span>
        </div>
      </div>
    </div>
  );
}
