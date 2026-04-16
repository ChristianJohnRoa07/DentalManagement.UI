import { useState, useEffect } from "react";
import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import { ThemeProvider, alpha } from "@mui/material/styles";

import { theme } from "../../common/theme";

// MUI Icons
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HealingRoundedIcon from "@mui/icons-material/HealingRounded";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

import {
    BILLING_COLOR,
    APPOINTMENTS,
    BILLING_ROWS,
    PATIENTS,
    PATIENT_AVATAR,
    STATUS_CHIP,
    WEEK
} from "../../common/constants";
import { type Appointment, type Patient, type BillingRow, type MetricCardProps } from "../../common/interface";

import Sidebar from "../Sidebar/Sidebar";
import MetricCard from "./components/MetricCard";
import TopBar from "./components/TopBar";
import Appointments from "./components/Appointments";
import ReservePatients from "./components/ReservedPatients";
import BillingSummary from "./components/BillingSummary";
import RecentPatients from "./components/RecentPatients";


function WeeklyBarChart() {
    const max = Math.max(...WEEK.thisWeek, ...WEEK.lastWeek);
    return (
        <Box p={2} pt={1.5}>
            <Stack direction="row" alignItems="flex-end" gap={1} sx={{ height: 96, mb: 1 }}>
                {WEEK.labels.map((_, i) => (
                    <Stack key={i} direction="row" alignItems="flex-end" gap={0.3} sx={{ flex: 1 }}>
                        <Box sx={{
                            flex: 1, bgcolor: "#BBF7E8", borderRadius: "3px 3px 0 0",
                            height: `${(WEEK.lastWeek[i] / max) * 96}px`
                        }} />
                        <Box sx={{
                            flex: 1, bgcolor: "#0F9B75", borderRadius: "3px 3px 0 0",
                            height: `${(WEEK.thisWeek[i] / max) * 96}px`
                        }} />
                    </Stack>
                ))}
            </Stack>
            <Stack direction="row" gap={1} mb={1.5}>
                {WEEK.labels.map((l) => (
                    <Typography key={l} sx={{ flex: 1, textAlign: "center", fontSize: "0.65rem", color: "text.secondary" }}>
                        {l}
                    </Typography>
                ))}
            </Stack>
            <Stack direction="row" gap={2}>
                {[{ color: "#0F9B75", label: "This week" }, { color: "#BBF7E8", label: "Last week" }].map(({ color, label }) => (
                    <Stack key={label} direction="row" alignItems="center" gap={0.75}>
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: color }} />
                        <Typography sx={{ fontSize: "0.7rem", color: "text.secondary" }}>{label}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
}


const METRIC_DATA: MetricCardProps[] = [
    {
        key: "totalPatients",
        label: "Total Patients",
        value: "12",
        delta: "12% increase",
        up: true,
        iconBg: alpha("#0F9B75", 0.1),
        icon: <PeopleRoundedIcon sx={{ fontSize: 16, color: "#0F9B75" }} />
    },
    {
        key: "monthlyRevenue",
        label: "Monthly Revenue",
        value: "$24.6k",
        delta: "12% vs last month",
        up: true,
        iconBg: alpha("#0F9B75", 0.1),
        icon: <ReceiptLongRoundedIcon sx={{ fontSize: 16, color: "primary.main" }} />
    },
    // {
    //     key: "pendingInvoices",
    //     label: "Pending Invoices",
    //     value: "7",
    //     delta: "2 overdue",
    //     up: false,
    //     iconBg: alpha("#D97706", 0.1),
    //     icon: <AssignmentRoundedIcon sx={{ fontSize: 16, color: "#D97706" }} />
    // },
    // {
    //     key: "activePatients",
    //     label: "Active Treatments",
    //     value: "31",
    //     delta: "5 new this week",
    //     up: true,
    //     iconBg: alpha("#7C3AED", 0.1),
    //     icon: <HealingRoundedIcon sx={{ fontSize: 16, color: "#7C3AED" }} />
    // },

];

function Dashboard() {

    const [activeNav, setActiveNav] = useState("Dashboard");

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex", height: "100vh", bgcolor: "background.default", overflow: "hidden" }}>

                {/* ── Sidebar ──────────────────────────────────────────────────── */}
                <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

                {/* ── Main content ─────────────────────────────────────────────── */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>

                    {/* Topbar */}
                    <TopBar />

                    <Box sx={{ flex: 1, overflowY: "auto", p: 2.5 }}>

                        {/* <div className="grid grid-cols-4 gap-3 mb-4">
                            {METRIC_DATA.map((data) => {
                                return (
                                    <MetricCard
                                        key={data.key}
                                        label={data.label}
                                        value={data.value}
                                        delta={data.delta}
                                        up={data.up}
                                        iconBg={data.iconBg}
                                        icon={data.icon}
                                    />
                                );
                            })}
                        </div> */}

                        {/* ── Row 1: Appointments + Billing ────────────────────────── */}
                        <div className="grid gap-3 mb-3" style={{ gridTemplateColumns: "1fr 650px" }}>

                            <ReservePatients appointments={APPOINTMENTS} />
                            
                            <Appointments appointments={APPOINTMENTS} />

                            {/* <Appointments appointments={APPOINTMENTS} /> */}

                            {/* <BillingSummary billingSummaryData={BILLING_ROWS} /> */}

                        </div>

                        {/* ── Row 2: Chart + Recent Patients ───────────────────────── */}
                        <div className="grid  gap-3">

                            

                            {/* <Paper elevation={0} sx={{ border: "1px solid #F3F4F6", borderRadius: 3 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center"
                                    px={2} py={1.5} sx={{ borderBottom: "1px solid #F9FAFB" }}>
                                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>Appointments this week</Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "primary.main", cursor: "pointer" }}>
                                        Monthly →
                                    </Typography>
                                </Stack>
                                <WeeklyBarChart />
                            </Paper> */}


                        </div>

                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Dashboard;