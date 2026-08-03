import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Rosters from './pages/Rosters';
import PlayerProfile from './pages/PlayerProfile';
import Tournaments from './pages/Tournaments';
import TournamentDetail from './pages/TournamentDetail';
import MatchCenter from './pages/MatchCenter';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Media from './pages/Media';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Achievements from './pages/Achievements';
import Sponsors from './pages/Sponsors';
import Recruitment from './pages/Recruitment';
import Contact from './pages/Contact';
import DropLocations from './pages/DropLocations';
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPlayers from './pages/admin/AdminPlayers';
import {
  AdminNews, AdminProducts, AdminSponsors, AdminTournaments,
  AdminOrders, AdminApplications, AdminMedia, AdminRosters,
  AdminUsers, AdminSettings, AdminMatches, AdminAchievements, AdminTeamMembers
} from './pages/admin/AdminModules';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false } },
});

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="players" element={<AdminPlayers />} />
              <Route path="rosters" element={<AdminRosters />} />
              <Route path="tournaments" element={<AdminTournaments />} />
              <Route path="matches" element={<AdminMatches />} />
              <Route path="news" element={<AdminNews />} />
              <Route path="media" element={<AdminMedia />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="sponsors" element={<AdminSponsors />} />
              <Route path="applications" element={<AdminApplications />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="achievements" element={<AdminAchievements />} />
              <Route path="team-members" element={<AdminTeamMembers />} />
            </Route>

            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="rosters" element={<Rosters />} />
              <Route path="players/:slug" element={<PlayerProfile />} />
              <Route path="tournaments" element={<Tournaments />} />
              <Route path="tournaments/:slug" element={<TournamentDetail />} />
              <Route path="match-center" element={<MatchCenter />} />
              <Route path="news" element={<News />} />
              <Route path="news/:slug" element={<NewsDetail />} />
              <Route path="media" element={<Media />} />
              <Route path="store" element={<Store />} />
              <Route path="store/cart" element={<Cart />} />
              <Route path="store/checkout" element={<Checkout />} />
              <Route path="sponsors" element={<Sponsors />} />
              <Route path="recruitment" element={<Recruitment />} />
              <Route path="contact" element={<Contact />} />
              <Route path="drop-locations/:mapName" element={<DropLocations />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { background: '#1A1A28', color: '#fff', border: '1px solid rgba(255,107,0,0.3)' },
          }}
        />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
