import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import About from "./components/Pages/About";
import User from "./components/Pages/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alerts/AlertContext.jsx";
import Alert from "./components/Layouts/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto p-8">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
