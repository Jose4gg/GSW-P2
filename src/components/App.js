import React, { PropTypes } from 'react';

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo';
import { createNetworkInterface } from 'apollo-client';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
};

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  opts: {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
});

const client = new ApolloClient({
  networkInterface,
});


class App extends React.Component {

  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return (
      <ApolloProvider client={client}>
        {React.Children.only(this.props.children)}
      </ApolloProvider>
    );
  }

}

export default App;
