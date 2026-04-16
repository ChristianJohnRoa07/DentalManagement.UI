import { useEffect } from "react";
import { alpha } from "@mui/material/styles";
import {
    Avatar,
    Box,
    Chip,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";

import { DentalUI } from "../../common/constants";
import { type NavSection, type SidebarProps } from "../../common/interface";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HealingRoundedIcon from "@mui/icons-material/HealingRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";

const NAV_SECTIONS: NavSection[] = [
    {
        section: "Main",
        items: [
            { key: "dashboard", label: "Dashboard", icon: <DashboardRoundedIcon fontSize="small" /> },
            { key: "patients", label: "Patients", icon: <PeopleAltRoundedIcon fontSize="small" />, badge: 248 },
            { key: "appointments", label: "Appointments", icon: <CalendarMonthRoundedIcon fontSize="small" />, badge: 8 },
        ],
    },
    {
        section: "Clinical",
        items: [
            { key: "treatmentPlans", label: "Treatment Plans", icon: <AssignmentRoundedIcon fontSize="small" /> },
            { key: "charting", label: "Charting", icon: <HealingRoundedIcon fontSize="small" /> },
        ],
    },
    {
        section: "Finance",
        items: [
            { key: "billing", label: "Billing", icon: <ReceiptLongRoundedIcon fontSize="small" /> },
        ],
    },
];

function Sidebar({ activeNav, setActiveNav }: SidebarProps) {

    useEffect(() => {
        console.log('activeNav', activeNav)
    }, [activeNav])

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DentalUI.DRAWER_WIDTH,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: DentalUI.DRAWER_WIDTH,
                    boxSizing: "border-box",
                    border: "none",
                    borderRight: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.paper",
                },
            }}
        >
            <Stack direction="row" alignItems="center" gap={1.5} px={2.5} py={2.5}
                sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
                <Box sx={{
                    width: 34, height: 34, borderRadius: "9px",
                    bgcolor: "primary.main",
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 3 5c-1.5 1.5-.5 4 1 5.5C4.5 15 6 19 8 21c1 1 2 1 3 .5V18c0-.5.5-1 1-1s1 .5 1 1v3.5c1 .5 2 .5 3-.5 2-2 3.5-6 4-10.5 1.5-1.5 2.5-4 1-5.5-1-1-2.5-.5-3.5.5C16.5 3.5 14.5 2 12 2z" />
                    </svg>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.1, color: "text.primary" }}>
                        Doctor Jones
                    </Typography>
                    <Typography sx={{ fontSize: "0.65rem", color: "text.secondary" }}>
                        Dental Management System
                    </Typography>
                </Box>
            </Stack>

            <Box sx={{ flex: 1, overflowY: "auto", px: 1.5, py: 1.5 }}>
                {NAV_SECTIONS.map(({ section, items }) => (
                    <Box key={section} mb={0.5}>
                        <Typography sx={{
                            fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.07em",
                            textTransform: "uppercase", color: "text.secondary", px: 1.5, py: 1, opacity: 0.7
                        }}>
                            {section}
                        </Typography>
                        <List dense disablePadding>
                            {items.map(({ key, label, icon, badge }) => (
                                <ListItemButton
                                    key={key}
                                    selected={activeNav === label}
                                    onClick={() => setActiveNav(label)}
                                    sx={{
                                        borderRadius: '8px',
                                        mb: 0.5,
                                        "&.Mui-selected": {
                                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                            "&:hover": {
                                                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                                            }
                                        }
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 32,
                                        color: activeNav === label ? "primary.main" : "text.secondary"
                                    }}>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={label}
                                        primaryTypographyProps={{
                                            fontSize: "0.825rem",
                                            fontWeight: activeNav === label ? 600 : 400,
                                            color: activeNav === label ? "primary.main" : "text.primary"
                                        }}
                                    />
                                    {badge !== undefined && (
                                        <Chip label={badge} size="small"
                                            sx={{
                                                height: 18,
                                                fontSize: "0.6rem",
                                                fontWeight: 600,
                                                bgcolor: "primary.main",
                                                color: "white",
                                                ml: 0.5
                                            }} />
                                    )}
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>

            <Box sx={{ borderTop: "1px solid", borderColor: "divider", px: 2, py: 1.75 }}>
                <Stack direction="row" alignItems="center" gap={1.5}>
                    <Avatar sx={{
                        width: 32, height: 32, fontSize: "0.7rem", fontWeight: 600,
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                        color: "primary.main"
                    }}>
                        DR
                    </Avatar>
                    <Box>
                        <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, lineHeight: 1.2, color: "text.primary" }}>
                            Dr. Rivera
                        </Typography>
                        <Typography sx={{ fontSize: "0.65rem", color: "text.secondary" }}>Lead Dentist</Typography>
                    </Box>
                </Stack>
            </Box>
        </Drawer>
    );
}

export default Sidebar;