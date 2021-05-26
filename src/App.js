import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Recomend from './components/Recomend'
import Cart from './screens/Cart'
import Home from './screens/Home'


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header>
          <Header></Header>
        </header>
        <main className="content">
          <Route path="/cart" component={Cart}></Route>
          <Route path="/" component={Home} exact></Route>
          <Recomend></Recomend>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
