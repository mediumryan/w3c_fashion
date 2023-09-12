import Header from './components/Header/Header';
import HeaderTitle from './components/Header/HeaderTitle';
import Greeting from './components/Greeting';
import './css/index.css';
import Post from './components/Post/Post';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { styled } from 'styled-components';

const MainWrapper = styled.div`
    position: relative;
    font-family: var(--font-family-default);
    color: var(--text-100);
`;

function App() {
    return (
        <MainWrapper>
            <Header />
            <HeaderTitle />
            <Modal />
            <Greeting />
            <Post />
            <Footer />
        </MainWrapper>
    );
}

export default App;
