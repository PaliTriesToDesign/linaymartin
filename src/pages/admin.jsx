import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [guestName, setGuestName] = useState('');
  const [gender, setGender] = useState('masculino'); // 'masculino', 'femenino'
  const [guestType, setGuestType] = useState('individual'); // 'individual', 'pareja'
  const [generatedLink, setGeneratedLink] = useState('');

  // Reset the generated link when any dependency changes
  useEffect(() => {
    setGeneratedLink('');
  }, [guestName, gender, guestType]);

  const handleGenerateLink = () => {
    const url = `${window.location.origin}/?guest=${encodeURIComponent(guestName)}&gender=${gender}&type=${guestType}`;
    setGeneratedLink(url); // Set the generated URL in state
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedLink).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className='adminPanel'>
      <h2>🎟️ Admin Panel</h2>
      
      {/* Guest Name */}
      <div className="optionsContainer">
        <div className="optionContainer">
          <label>Invitado/s:</label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Nombre del invitado"
          />
        </div>
        
        {/* Gender Selection */}
        <div className="optionContainer">
          <label>Género:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        
        {/* Guest Type Selection */}
        <div className="optionContainer">
          <label>Tipo:</label>
          <select value={guestType} onChange={(e) => setGuestType(e.target.value)}>
            <option value="individual">Individual</option>
            <option value="pareja">Pareja</option>
          </select>
        </div>
        
        {/* Generate Link */}
        <button onClick={handleGenerateLink}>
          Generar invitación
        </button>
      </div>
      
      {/* Display Generated Link */}
      {generatedLink && (
        <div className='invitationLink'>
          <label>Invitation Link:</label>
          <input 
            type="text" 
            value={generatedLink} 
            readOnly
          />
          <button onClick={handleCopyLink}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default Admin;
