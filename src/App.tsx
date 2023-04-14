import './App.css';
import useRoute from './routes/public.routes';

function App() {
  const route = useRoute();
  return <>{route}</>;
}

export default App;
