import { Provider } from 'react-redux';
import './App.css'
import store from './utils/store';
import Body from './components/Body';
import Head from './components/Head';

function App() {
  return (
    <Provider store={store}>
      <div >
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
