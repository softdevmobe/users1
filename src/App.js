import React from "react";
import { Routes, Route, Link } from "react-router-dom";

<<<<<<< HEAD
class App extends Component {
  render() {
    return (

        <Routes>
          {/* استفاده از Layout برای مسیرهای مشترک */}
          <Route path="/" element={<DashboardLayoutBasic />}>
            <Route index element={<Home />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="users" element={<Users />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
            <Route path="product" element={<Product />} />
            <Route path="loginForm" element={<LoginForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

    );
  }
=======
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
>>>>>>> 8cfe78a6836a78ee69a6d3ec45f5abe17f11d63c
}

export default App;