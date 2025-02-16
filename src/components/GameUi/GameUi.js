import React from 'react';
import './GameUi.css';
/**
 * Renders the Game UI with an icon, title, and description.
 *
 * @param {Object} props - Component props.
 * @param {React.ComponentType} props.IconComponent - Render edilecek ikon bileşeni.
 * @param {string} props.gameTitle - Oyun başlığı, ekranda gösterilecek.
 * @param {string} [props.description] - Oyun açıklaması (isteğe bağlı).
 * @param {string} [props.buttonLabel] - Buton üzerinde gösterilecek metin gönderilmezse button render edilmez
 * @param {Function} [props.onButtonClick] - Buton tıklama olayını yakalamak için callback (isteğe bağlı).
 */
function GameUi({ IconComponent, gameTitle, description, buttonLabel, onButtonClick}) {
  return(
    <div className='game-ui'>
      {IconComponent && <IconComponent className='game-icon' />}
      <h1 className='game-title'>{gameTitle}</h1>
      {description && <p className='game-description'>{description}</p>}
      {buttonLabel && (
        <button className='game-ui-button' onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default GameUi;  