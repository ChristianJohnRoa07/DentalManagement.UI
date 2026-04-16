
import {
    Box,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

interface MetricCardProps {
    label: string;
    value: string;
    delta: string;
    up: boolean;
    iconBg: string;
    icon: React.ReactNode;
}

function MetricCard({ label, value, delta, up, iconBg, icon }: MetricCardProps) {
    return (
        <Paper elevation={0} sx={{ border: "1px solid", borderColor: "grey.100", borderRadius: 3, p: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1.5}>
                <Typography variant="body2" color="text.secondary">{label}</Typography>
                <Box sx={{
                    width: 30, height: 30, borderRadius: "8px", bgcolor: iconBg,
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    {icon}
                </Box>
            </Stack>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: 600, letterSpacing: "-0.5px", lineHeight: 1 }}>
                {value}
            </Typography>
            <Stack direction="row" alignItems="center" gap={0.4} mt={0.75}>
                {up
                    ? <TrendingUpRoundedIcon sx={{ fontSize: 14, color: "#0F9B75" }} />
                    : <TrendingDownRoundedIcon sx={{ fontSize: 14, color: "#DC2626" }} />}
                <Typography variant="body2" sx={{ color: up ? "#0F9B75" : "#DC2626", fontSize: "0.7rem" }}>
                    {delta}
                </Typography>
            </Stack>
        </Paper>
    );
}

export default MetricCard;