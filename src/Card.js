import React from 'react';

const Card = ({ card }) => {
  const renderCardContent = () => {
    if (card.type === 'burner') {
      return (
        <div>
          <span>Expiry: {card.expiry}</span>
          {/* Add other burner card content */}
        </div>
      );
    } else if (card.type === 'subscription') {
      return (
        <div>
          <span>Limit: {card.limit}</span>
          {/* Add other subscription card content */}
        </div>
      );
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-type">{card.type}</span>
      </div>
      <div className="card-body">{renderCardContent()}</div>
    </div>
  );
};

export default Card;
