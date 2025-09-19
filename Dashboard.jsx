import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Divider, List, ListItem, ListItemText, useTheme, Avatar, Button, Stack, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import OutboxIcon from '@mui/icons-material/Outbox';
import HistoryIcon from '@mui/icons-material/History';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Sample ticker data
const tickerData = [
  { label: 'Nasdaq 100', value: '24,344.8', change: '+98.90 (+0.41%)', color: 'success.main' },
  { label: 'EUR/USD', value: '1.18099', change: '-0.00059 (-0.05%)', color: 'error.main' },
  { label: 'BTC/USD', value: '116,747', change: '+270.00 (+0.23%)', color: 'success.main' },
  { label: 'ETH/USD', value: '4,620.8', change: '+28.50', color: 'success.main' },
];

// Example market data for the chart
const marketData = [
  { name: 'Mon', value: 12000 },
  { name: 'Tue', value: 12500 },
  { name: 'Wed', value: 12300 },
  { name: 'Thu', value: 12800 },
  { name: 'Fri', value: 12700 },
  { name: 'Sat', value: 13000 },
  { name: 'Sun', value: 12900 },
];

// Leverage options for the trading panel
const leverageOptions = [
  2, 3, 4, 5, 10, 25, 30, 40, 50, 60, 70, 80, 90, 100
];



const cardGradient = 'linear-gradient(135deg, #232742 0%, #1a1d2b 100%)';
const topCards = [
  { label: 'Total Balance', value: '$0.00', icon: <AccountBalanceWalletIcon fontSize="large" />, gradient: cardGradient },
  { label: 'Profit', value: '$0.00', icon: <ShowChartIcon fontSize="large" />, gradient: cardGradient },
  { label: 'Total Bonus', value: '$0.00', icon: <GroupIcon fontSize="large" />, gradient: cardGradient },
  { label: 'Account Status', value: 'UNVERIFIED', icon: <VerifiedUserIcon fontSize="large" />, gradient: cardGradient, chip: true },
];

const bottomCards = [
  { label: 'Total Trades', value: '0', icon: <ShowChartIcon fontSize="large" />, gradient: cardGradient },
  { label: 'Open Trades', value: '0', icon: <FolderOpenIcon fontSize="large" />, gradient: cardGradient },
  { label: 'Closed Trades', value: '0', icon: <HistoryIcon fontSize="large" />, gradient: cardGradient },
  { label: 'Win/Loss Ratio', value: '0', icon: <EmojiEventsIcon fontSize="large" />, gradient: cardGradient },
];

const notifications = [
  'Deposit of $1,000 completed',
  'Trade #1234 closed with +5% profit',
  'Withdrawal of $500 processed',
  'New signal available: EUR/USD',
];

export default function Dashboard() {
  const theme = useTheme();
  return (
    <Box p={{ xs: 1, sm: 3 }}>
      {/* Header with username and quick actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, bgcolor: '#232742', p: 2, borderRadius: 3, boxShadow: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
            <PersonIcon fontSize="large" />
          </Avatar>
          <Typography variant="h6" fontWeight={700} color="#fff">
            Username: <span style={{ color: theme.palette.primary.main }}>precious</span>
          </Typography>
        </Box>
        const theme = useTheme();
      }