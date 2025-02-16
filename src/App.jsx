import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/navbar";
import LandingPage from "./pages/landing/LandingPage";
import AuthPage from "./pages/auth/AuthPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ChatbotPage from "./pages/chatbot/ChatbotPage";
import ChannelsPage from "./pages/channel/ChannelsPage";
import TwitterSentimentPage from "./pages/twitter/TwitterSentimentPage";
import TrendingPage from "./pages/trending/TrendingPages";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
        <Routes>
      {/* <div className="min-h-screen bg-gray-50"> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/channels" element={<ChannelsPage />} />
          <Route path="/twitter" element={<TwitterSentimentPage />} />
          <Route path="/trending" element={<TrendingPage />} />
      {/* </div> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
