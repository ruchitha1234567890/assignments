import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './app/App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
