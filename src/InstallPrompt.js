import React, { useEffect, useState } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

const handleInstallClick = async () => {
  console.log('Install button clicked');
  if (deferredPrompt) {
    console.log('Prompting install');
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('User choice outcome:', outcome);
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    setDeferredPrompt(null);
    setShowButton(false);
  }
};


  return showButton ? (
    <button onClick={handleInstallClick} style={{ padding: '10px 20px', fontSize: '1rem', marginTop: '20px' }}>
      📲 Install App
    </button>
  ) : null;
};

export default InstallPrompt;
