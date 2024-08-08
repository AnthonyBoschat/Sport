import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import client from './appollo-client.js'
import { ApolloProvider } from '@apollo/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
