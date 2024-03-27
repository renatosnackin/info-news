import Header from './components/header/';
import Sales from './components/sales/';
import TopItems from './components/topItems';
import Users from './components/users';
import Profile from './components/profile';
import Footer from './components/footer';
import { EndpointProvider } from './context';

function App() {
  return (
    <>
      <EndpointProvider>
        <Header />
        <Sales />
        <TopItems />
        <Users />
        <Profile />
        <Footer />
      </EndpointProvider>
    </>
  );
}

export default App;
