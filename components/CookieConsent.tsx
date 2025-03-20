"use client";

import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Check if consent is already given
  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowBanner(true);
    }

    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setShowBanner(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const openSettings = () => {
    alert("Open cookie settings modal here!");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 z-10 left-4 right-4 md:left-10 md:right-10 bg-white shadow-xl rounded-lg p-4 flex flex-col md:flex-row justify-between items-center border border-gray-200">
      <p className="text-sm text-gray-700">
        We use cookies to improve your experience. By continuing, you accept our
        use of cookies.
      </p>
      <div className="flex mt-2 md:mt-0">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-700"
          onClick={acceptCookies}
        >
          Accept All Cookies
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
          onClick={openSettings}
        >
          Cookie Settings
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
