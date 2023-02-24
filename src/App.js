import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
   <React.Fragment>
    <html>
      <head>
      <meta name="description" content="Little Lemon Restaurant"/>
      <meta name="og:title" content="Recipe Food"/>
      <meta name="og:description" content="Specialists in the preparation of foreign cuisine and beverages"/>
      <meta name="og:image" content="Adrian cooking"/>
      </head>
        <body>
          <Header/>
          <Nav/>
          <Main/>
          <Footer/>
        </body>
    </html>
  </React.Fragment> //use nav elements instead of div tags to represent Navigation
  );
}

export default App;
