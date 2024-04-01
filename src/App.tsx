import Header from './components/header/';
import Sales from './components/sales/';
import TopItems from './components/topItems';
import Users from './components/users';
import Profile from './components/profile';
import Footer from './components/footer';
import InputStore from "./components/inputStore";
import { EndpointProvider } from "./context";

import "./App.css";

function App() {
  return (
    <>
      <EndpointProvider>
        <InputStore />

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
