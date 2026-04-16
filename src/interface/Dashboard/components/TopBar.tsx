import {
    Box,
    Button,
    Paper,
    Stack,
    Tooltip,
    Typography,
    TextField,
    InputAdornment
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function TopBar() {
    return (
        <Paper elevation={0} square
            sx={{
                px: 3, py: 2, borderBottom: "1px solid #F3F4F6",
                display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0
            }}>
            <Box>
                <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: "text.primary" }}>
                    Good morning, Dr. Rivera
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.75rem", mt: 0.25 }}>
                    Wednesday, 25 March 2026 — 12 appointments today
                </Typography>
            </Box>
            <Stack direction="row" gap={1}>
                <Tooltip title="Search patients or records">
                    <TextField
                        placeholder="Search..."
                        size="small"
                        sx={{
                            width: 320, // Adjust this number to make it as long as you need
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                                fontSize: "0.85rem",
                                bgcolor: "white",
                                "& fieldset": { borderColor: "grey.200" },
                                "&:hover fieldset": { borderColor: "grey.300" },
                            },
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchRoundedIcon sx={{ fontSize: "1.1rem", color: "text.secondary" }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Tooltip>
                <Button variant="contained" size="small" disableElevation
                    startIcon={<AddRoundedIcon />}
                    sx={{ fontSize: "0.75rem", bgcolor: "primary.main", "&:hover": { bgcolor: "primary.dark" } }}>
                    New Appointment
                </Button>
            </Stack>
        </Paper>
    );
}

export default TopBar;