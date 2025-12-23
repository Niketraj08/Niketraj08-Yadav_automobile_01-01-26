import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSettings, FiX, FiCheck, FiEye, FiLock } from "react-icons/fi";
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const cookiePrefs = localStorage.getItem('cookiePreferences');

    if (!consent) {
      // Show modal if no consent given yet
      setTimeout(() => setIsVisible(true), 1000); // Show after 1 second
    }

    if (cookiePrefs) {
      setPreferences(JSON.parse(cookiePrefs));
    }
  }, []);

  const acceptAllCookies = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };

    setPreferences(allPreferences);
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    setIsVisible(false);

    // Here you would typically initialize your analytics/marketing cookies
    console.log('All cookies accepted');
  };

  const acceptEssentialOnly = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };

    setPreferences(essentialOnly);
    localStorage.setItem('cookieConsent', 'essential-only');
    localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
    setIsVisible(false);

    console.log('Only essential cookies accepted');
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);

    console.log('Custom preferences saved:', preferences);
  };

  const togglePreference = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled

    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieCategories = [
    {
      key: 'essential',
      icon: FiLock,
      title: 'Essential Cookies',
      description: 'Required for the website to function properly. These cannot be disabled.',
      required: true
    },
    {
      key: 'functional',
      icon: FiSettings,
      title: 'Functional Cookies',
      description: 'Help us remember your preferences and provide enhanced features.',
      required: false
    },
    {
      key: 'analytics',
      icon: FiEye,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve our services.',
      required: false
    },
    {
      key: 'marketing',
      icon: FaCookieBite,
      title: 'Marketing Cookies',
      description: 'Used to deliver personalized advertisements and track campaign effectiveness.',
      required: false
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-end justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
              <div className="flex items-center gap-4 mb-4">
                <FaCookieBite className="text-3xl" />
                <div>
                  <h2 className="text-2xl font-bold">Cookie Preferences</h2>
                  <p className="text-primary-100">We value your privacy</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content,
                and analyze our traffic. Please choose how you want to proceed.
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {!showPreferences ? (
                /* Main Consent Options */
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={acceptAllCookies}
                      className="flex items-center justify-center gap-3 bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                    >
                      <FiCheck className="text-xl" />
                      Accept All Cookies
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowPreferences(true)}
                      className="flex items-center justify-center gap-3 border-2 border-slate-300 text-slate-700 py-4 px-6 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                    >
                      <FiSettings className="text-xl" />
                      Manage Preferences
                    </motion.button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    onClick={acceptEssentialOnly}
                    className="w-full text-center text-slate-600 hover:text-primary transition-colors py-2"
                  >
                    Accept Essential Cookies Only
                  </motion.button>
                </div>
              ) : (
                /* Detailed Preferences */
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Cookie Settings</h3>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="text-slate-500 hover:text-slate-700"
                    >
                      <FiX className="text-xl" />
                    </button>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {cookieCategories.map((category) => (
                      <motion.div
                        key={category.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg"
                      >
                        <div className={`p-2 rounded-lg ${category.required ? 'bg-green-100' : 'bg-slate-100'}`}>
                          <category.icon className={`text-xl ${category.required ? 'text-green-600' : 'text-slate-600'}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-slate-900">{category.title}</h4>
                            {category.required ? (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                Required
                              </span>
                            ) : (
                              <button
                                onClick={() => togglePreference(category.key)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                  preferences[category.key] ? 'bg-primary' : 'bg-slate-300'
                                }`}
                              >
                                <span
                                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    preferences[category.key] ? 'translate-x-6' : 'translate-x-1'
                                  }`}
                                />
                              </button>
                            )}
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={savePreferences}
                      className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Save Preferences
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={acceptAllCookies}
                      className="flex-1 border border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      Accept All
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
