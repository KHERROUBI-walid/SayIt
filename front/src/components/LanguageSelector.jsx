import React, { useState } from 'react';

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('ARABIC');

  return (
    <div className="language-selector">
      <button 
        className={selectedLanguage === 'ENGLISH' ? 'selected' : ''} 
        onClick={() => setSelectedLanguage('ENGLISH')}
      >
        ENGLISH
      </button>
      <button 
        className={selectedLanguage === 'ARABIC' ? 'selected' : ''} 
        onClick={() => setSelectedLanguage('ARABIC')}
      >
        ARABIC
      </button>
    </div>
  );
}

export default LanguageSelector;
