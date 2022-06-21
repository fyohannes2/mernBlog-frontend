import './App.css';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

// #region --------------[ Import Components ]--------------
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewBlog from './pages/NewBlog';
//import EditBlog from './pages/EditBlog';
import PrivateRoute from './pages/PrivateRoute';
// #endregion
function App() {
  
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/profile" element={<PrivateRoute />} >
                        <Route path="/profile" element={<Profile />} />
                    </Route>

                    <Route path="/blogs" element={<PrivateRoute />} >
                        <Route path="/blogs" element={<BlogList />} />
                    </Route>

                    <Route path="/blogs/:id" element={<PrivateRoute />} >
                        <Route path="/blogs/:id" element={<BlogDetail />} />
                    </Route>

                    <Route path="/newblog" element={<PrivateRoute />} >
                        <Route path="/newblog" element={<NewBlog />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;