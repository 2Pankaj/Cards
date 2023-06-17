import React, { useState, useEffect } from 'react';
import './styles.css';
import Tabs from './Tabs';
import CardList from './CardList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoins, faMoneyBillWave, faCalendarAlt, faSortNumericUp, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCoins, faMoneyBillWave, faCalendarAlt, faSortNumericUp, faInfoCircle);

const mockApiResponse = {
  data: [
    {
      name: 'Mixmax',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: {
        value: 100,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 1000,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '9 Feb',
      limit: 100,
      status: 'active',
    },
    {
      name: 'Quickbooks',
      budget_name: 'Software subscription',
      owner_id: 2,
      spent: {
        value: 50,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 250,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 10,
      status: 'active',
    },
    {
      name: 'Slack',
      budget_name: 'Software subscription',
      owner_id: 3,
      spent: {
        value: 80,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 500,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '15 Mar',
      limit: 200,
      status: 'blocked',
    },
    {
      name: 'Zoom',
      budget_name: 'Software subscription',
      owner_id: 4,
      spent: {
        value: 120,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 800,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 20,
      status: 'active',
    },
    {
      name: 'Trello',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: {
        value: 40,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 300,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '30 Apr',
      limit: 150,
      status: 'active',
    },
    {
      name: 'Asana',
      budget_name: 'Software subscription',
      owner_id: 2,
      spent: {
        value: 60,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 400,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 15,
      status: 'blocked',
    },
  ],
  page: 1,
  per_page: 10,
  total: 100,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('your');
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardTypeFilter, setCardTypeFilter] = useState('');

  useEffect(() => {
    // Simulating API call
    fetchCards();
  }, []);

  const fetchCards = () => {
    // Simulating API response
    setCards(mockApiResponse.data);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCardTypeFilterChange = (event) => {
    setCardTypeFilter(event.target.value);
  };

  const filteredCards = cards.filter((card) => {
    const cardNameMatch = card.name.toLowerCase().includes(searchQuery.toLowerCase());
    const cardTypeMatch = card.card_type === cardTypeFilter || cardTypeFilter === '';

    return cardNameMatch && cardTypeMatch;
  });

  return (
    <div className="app">
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <input
        type="text"
        placeholder="Search by card name..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <select value={cardTypeFilter} onChange={handleCardTypeFilterChange}>
        <option value="">All Types</option>
        <option value="burner">Burner</option>
        <option value="subscription">Subscription</option>
      </select>
      <CardList cards={filteredCards} />
    </div>
  );
};

export default App;


