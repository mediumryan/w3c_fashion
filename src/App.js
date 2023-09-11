import Header from './components/Header/Header';
import HeaderTitle from './components/Header/HeaderTitle';
import Greeting from './components/Greeting';
import './css/index.css';
import Post from './components/Post/Post';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
    return (
        <div className="App">
            <Header />
            <HeaderTitle />
            <Modal />
            <Greeting />
            <Post />
            <Footer />
        </div>
    );
}

export default App;
