
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box, ThemeProvider, createTheme, ListItemIcon, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import OutboxIcon from '@mui/icons-material/Outbox';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HistoryIcon from '@mui/icons-material/History';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImageIcon from '@mui/icons-material/Image';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BuildIcon from '@mui/icons-material/Build';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Deposits from './pages/Deposits';
import Withdrawals from './pages/Withdrawals';
import Trade from './pages/Trade';
import TradeHistory from './pages/TradeHistory';
import CopyTrading from './pages/CopyTrading';
import BuyPlan from './pages/BuyPlan';
import NFTGallery from './pages/NFTGallery';
import SubscribeSignals from './pages/SubscribeSignals';
import ApplyLoans from './pages/ApplyLoans';
import TradingHistory from './pages/TradingHistory';
import VerifyAccount from './pages/VerifyAccount';
import AccountHistory from './pages/AccountHistory';
import News from './pages/News';
import AccountSettings from './pages/AccountSettings';
import ReferUser from './pages/ReferUser';
import Technical from './pages/Technical';
import Chart from './pages/Chart';
import Calendar from './pages/Calendar';

const drawerWidth = 240;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#181A20',
      paper: '#23272F',
    },
    primary: {
      main: '#00B386',
    },
    secondary: {
      main: '#1E88E5',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

const pages = [
  { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { path: '/register', label: 'Register', icon: <PersonAddIcon /> },
  { path: '/login', label: 'Login', icon: <LoginIcon /> },
  { path: '/dashboard/deposits', label: 'Deposits', icon: <AccountBalanceWalletIcon /> },
  { path: '/dashboard/withdrawals', label: 'Withdrawals', icon: <OutboxIcon /> },
  { path: '/dashboard/trade', label: 'Trade', icon: <ShowChartIcon /> },
  { path: '/dashboard/trades/history', label: 'Trade History', icon: <HistoryIcon /> },
  { path: '/dashboard/copy-trading', label: 'Copy Trading', icon: <ContentCopyIcon /> },
  { path: '/dashboard/buy-plan', label: 'Buy Plan', icon: <ShoppingCartIcon /> },
  { path: '/dashboard/nft-gallery', label: 'NFT Gallery', icon: <ImageIcon /> },
  { path: '/dashboard/subscribe-signals', label: 'Subscribe Signals', icon: <SignalCellularAltIcon /> },
  { path: '/dashboard/loans/apply', label: 'Apply for Loans', icon: <MonetizationOnIcon /> },
  { path: '/dashboard/tradinghistory', label: 'Trading History', icon: <ShowChartIcon /> },
  { path: '/dashboard/verify-account', label: 'Verify Account', icon: <VerifiedUserIcon /> },
  { path: '/dashboard/accounthistory', label: 'Account History', icon: <AccountBoxIcon /> },
  { path: '/dashboard/news', label: 'News', icon: <NewspaperIcon /> },
  { path: '/dashboard/account-settings', label: 'Account Settings', icon: <SettingsIcon /> },
  { path: '/dashboard/referuser', label: 'Refer User', icon: <GroupAddIcon /> },
  { path: '/dashboard/technical', label: 'Technical', icon: <BuildIcon /> },
  { path: '/dashboard/chart', label: 'Chart', icon: <InsertChartIcon /> },
  { path: '/dashboard/calendar', label: 'Calendar', icon: <CalendarMonthIcon /> },
];



function AppContent() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 3 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            Interspace Broker Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#181A20',
            color: '#fff',
            borderRight: '1px solid #23272F',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', pt: 2 }}>
          <List>
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <ListItem
                  button
                  key={page.path}
                  component={Link}
                  to={page.path}
                  onClick={handleDrawerClose}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    mx: 1,
                    color: '#fff',
                    fontWeight: isActive ? 700 : 400,
                    bgcolor: isActive ? 'primary.main' : 'transparent',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: '#fff',
                    },
                    boxShadow: isActive ? 2 : 0,
                    transition: 'all 0.2s',
                  }}
                >
                  <ListItemIcon sx={{ color: '#fff', minWidth: 36 }}>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.label} sx={{ '.MuiTypography-root': { fontWeight: isActive ? 700 : 400 } }} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: { xs: 1, sm: 3 } }}>
        <Toolbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/deposits" element={<Deposits />} />
          <Route path="/dashboard/withdrawals" element={<Withdrawals />} />
          <Route path="/dashboard/trade" element={<Trade />} />
          <Route path="/dashboard/trades/history" element={<TradeHistory />} />
          <Route path="/dashboard/copy-trading" element={<CopyTrading />} />
          <Route path="/dashboard/buy-plan" element={<BuyPlan />} />
          <Route path="/dashboard/nft-gallery" element={<NFTGallery />} />
          <Route path="/dashboard/subscribe-signals" element={<SubscribeSignals />} />
          <Route path="/dashboard/loans/apply" element={<ApplyLoans />} />
          <Route path="/dashboard/tradinghistory" element={<TradingHistory />} />
          <Route path="/dashboard/verify-account" element={<VerifyAccount />} />
          <Route path="/dashboard/accounthistory" element={<AccountHistory />} />
          <Route path="/dashboard/news" element={<News />} />
          <Route path="/dashboard/account-settings" element={<AccountSettings />} />
          <Route path="/dashboard/referuser" element={<ReferUser />} />
          <Route path="/dashboard/technical" element={<Technical />} />
          <Route path="/dashboard/chart" element={<Chart />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
