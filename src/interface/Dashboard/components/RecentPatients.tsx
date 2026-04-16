import {
    Avatar,
    Box,
    Chip,
    Divider,
    Stack,
    Typography,
    Paper
} from "@mui/material";

import { type RecentPatientProps } from "../../../common/interface";
import { PATIENT_AVATAR, STATUS_CHIP } from "../../../common/constants"

function RecentPatients({recentPatientsData}:RecentPatientProps) {
    return (
        <Paper elevation={0} sx={{ border: "1px solid #F3F4F6", borderRadius: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center"
                px={2} py={1.5} sx={{ borderBottom: "1px solid #F9FAFB" }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>Recent Patients</Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "primary.main", cursor: "pointer" }}>
                    All patients →
                </Typography>
            </Stack>

            {recentPatientsData.map((pt, i) => {
                const pal = PATIENT_AVATAR[i % PATIENT_AVATAR.length];
                return (
                    <Box key={pt.name}>
                        <Stack direction="row" alignItems="center" gap={1.5} px={2} py={1.25}
                            sx={{ "&:hover": { bgcolor: "grey.50" }, transition: "background 0.15s" }}>
                            <Avatar sx={{ width: 28, height: 28, fontSize: "0.65rem", fontWeight: 600, ...pal }}>
                                {pt.initials}
                            </Avatar>
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography sx={{ fontSize: "0.825rem", fontWeight: 500 }} noWrap>
                                    {pt.name}
                                </Typography>
                                <Typography sx={{ fontSize: "0.7rem", color: "text.secondary" }}>
                                    Last visit: {pt.lastVisit} · {pt.treatment}
                                </Typography>
                            </Box>
                            <Chip label={pt.status} size="small" sx={STATUS_CHIP[pt.status]} />
                        </Stack>
                        {i < recentPatientsData.length - 1 && <Divider sx={{ mx: 2, opacity: 0.5 }} />}
                    </Box>
                );
            })}
        </Paper>
    );
}

export default RecentPatients;