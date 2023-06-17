import React from 'react';

const CardList = ({ cards }) => {
  const calculateColorPercentage = (value, max) => {
    const percentage = (value / max) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="card-list">
      {cards.map((card, index) => {
        const spentColorPercentage = calculateColorPercentage(card.spent.value, card.available_to_spend.value);
        const availableColorPercentage = calculateColorPercentage(card.available_to_spend.value - card.spent.value, card.available_to_spend.value);

        return (
          <div className="card" key={index}>
            <div className="card-header">
              <span className="card-name">{card.name}</span>
              <span className="card-type">{card.card_type}</span>
            </div>
            <div className="card-body">
              <div className="card-details">
                <div className="card-details-item">
                  <i className="fas fa-coins card-details-icon"></i>
                  <span className="card-details-label">Budget:</span>
                  <span className="card-details-value">{card.budget_name}</span>
                </div>
                <div className="card-details-item">
                  <i className="fas fa-money-bill-wave card-details-icon"></i>
                  <span className="card-details-label">Spent:</span>
                  <div className="card-details-progress">
                    <div
                      className="card-details-progress-bar"
                      style={{ width: spentColorPercentage }}
                    ></div>
                  </div>
                  <span className="card-details-value spent-value">{card.spent.value} {card.spent.currency}</span>
                </div>
                <div className="card-details-item">
                  <i className="fas fa-money-bill-wave card-details-icon"></i>
                  <span className="card-details-label">Available:</span>
                  <div className="card-details-progress">
                    <div
                      className="card-details-progress-bar"
                      style={{ width: availableColorPercentage }}
                    ></div>
                  </div>
                  <span className="card-details-value available-value">{card.available_to_spend.value} {card.available_to_spend.currency}</span>
                </div>
                {card.card_type === 'burner' && (
                  <div className="card-details-item">
                    <i className="far fa-calendar-alt card-details-icon"></i>
                    <span className="card-details-label">Expiry:</span>
                    <span className="card-details-value">{card.expiry}</span>
                  </div>
                )}
                {card.card_type === 'subscription' && (
                  <div className="card-details-item">
                    <i className="fas fa-sort-numeric-up card-details-icon"></i>
                    <span className="card-details-label">Limit:</span>
                    <span className="card-details-value">{card.limit}</span>
                  </div>
                )}
                <div className="card-details-item">
                  <i className="fas fa-info-circle card-details-icon"></i>
                  <span className="card-details-label">Status:</span>
                  <span className="card-details-value">{card.status}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
