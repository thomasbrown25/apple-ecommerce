import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.component';

///import './media-queries.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default App;
