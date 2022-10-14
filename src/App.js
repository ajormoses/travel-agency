import Header from "./components/Header";
import ArticleOne from "./components/ArticleOne";
import ArticleTwo from "./components/ArticleTwo";
import ArticleThree from "./components/ArticleThree";
import ArticleFour from "./components/ArticleFour";
import ArticleFive from "./components/ArticleFive";
import ArticleSix from "./components/ArticleSix";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleOne />
      <ArticleTwo />
      <ArticleThree />
      <ArticleFour />
      <ArticleFive />
      <ArticleSix />
      <Footer />
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
