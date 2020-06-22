import React, { useState, createContext } from 'react';
const AppContext = createContext({});
import moment from 'moment';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://covid19-graphql.netlify.app/',
  }),
});

const Provider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logs, setLogs] = useState([]);

  const [currentLog, setCurrentLog] = useState({
    date: moment(),
    Ache: 0,
    'Breath Shortness': 0,
    Fever: 0,
    'Dry Cough': 0,
    'Sore Throat': 0,
    Tiredness: 0,
  });

  const [profile, setProfile] = useState({
    age: 0,
    gender: 1,
    travel: [],
    hlnumber: 0,
  });

  const [cases, setCases] = useState([]);

  return (
    <>
      <ApolloProvider client={client}>
        <AppContext.Provider
          value={{
            isLoggedIn,
            toggleLoggedIn,
            countryList,
            addLog,
            logs,
            setCurrentLogAbs,
            clearCurrLog,
            currentLog,
            addCase,
            cases,
          }}
        >
          {children}
        </AppContext.Provider>
      </ApolloProvider>
    </>
  );

  function addLog() {
    setLogs([...logs, currentLog]);
  }

  function toggleLoggedIn() {
    return setIsLoggedIn(!isLoggedIn);
  }

  function addCase(caseObj) {
    setCases([...cases, caseObj]);
  }

  function setCurrentLogAbs(objkey, val) {
    const entry = { [objkey]: val };
    setCurrentLog({
      ...currentLog,
      ...entry,
    });
  }

  function clearCurrLog() {
    setCurrentLog({
      date: moment(),
      Ache: 0,
      'Breath Shortness': 0,
      Fever: 0,
      'Dry Cough': 0,
      'Sore Throat': 0,
      Tiredness: 0,
    });
  }
};

export { AppContext, Provider };

const countryList = {
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  EG: 'Egypt',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories (the)',
  GA: 'Gabon',
  GM: 'Gambia (the)',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  LY: 'Libya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger (the)',
  NG: 'Nigeria',
};
