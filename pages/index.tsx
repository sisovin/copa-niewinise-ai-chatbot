import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Button } from 'shadcn-ui';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState('basic');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubscriptionChange = (e) => {
    setSubscriptionPlan(e.target.value);
  };

  return (
    <ThemeProvider attribute="class">
      <div className={darkMode ? 'dark' : ''}>
        <header>
          <h1>Welcome to COPA Niewinise AI Chatbot</h1>
          <Button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </header>
        <main>
          <p>This is the landing page for the COPA Niewinise AI Chatbot.</p>
          <div>
            <label htmlFor="subscriptionPlan">Subscription Plan:</label>
            <select
              id="subscriptionPlan"
              value={subscriptionPlan}
              onChange={handleSubscriptionChange}
            >
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Home;
