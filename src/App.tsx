import './App.css';
import useRoute from './routes/public.routes';

const App = (): JSX.Element => {
  const route = useRoute();
  return <>{route}</>;
};

export default App;
