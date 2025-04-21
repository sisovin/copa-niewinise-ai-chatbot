import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Button } from 'shadcn-ui';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Home;
