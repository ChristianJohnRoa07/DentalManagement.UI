import {
    Avatar,
    Box,
    Chip,
    Divider,
    Stack,
    Typography,
    Paper
} from "@mui/material";

import { type AppointmentProps } from "../../common/interface";

import { AVATAR_COLOR, TREATMENT_CHIP, APPOINTMENTS } from "../../common/constants";


function Appointments({ appointments }: AppointmentProps) {
    return (

        <Paper elevation={0} sx={{ border: "1px solid #F3F4F6", borderRadius: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center"
                px={2} py={1.5} sx={{ borderBottom: "1px solid #F9FAFB" }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>Today's Appointments</Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "primary.main", cursor: "pointer" }}>
                    View all →
                </Typography>
            </Stack>

            {appointments.map((appt, i) => (
                <Box key={appt.name}>
                    <Stack direction="row" alignItems="center" gap={1.5} px={2} py={1.25}
                        sx={{ "&:hover": { bgcolor: "grey.50" }, transition: "background 0.15s" }}>
                        <Typography sx={{
                            width: 40, fontSize: "0.72rem", fontWeight: 500,
                            color: "text.secondary", flexShrink: 0
                        }}>
                            {appt.time}
                        </Typography>
                        <Avatar sx={{
                            width: 28, height: 28, fontSize: "0.65rem", fontWeight: 600,
                            ...AVATAR_COLOR[appt.type]
                        }}>
                            {appt.initials}
                        </Avatar>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography sx={{ fontSize: "0.825rem", fontWeight: 500 }} noWrap>
                                {appt.name}
                            </Typography>
                            <Typography sx={{ fontSize: "0.7rem", color: "text.secondary" }}>
                                Dr. {appt.doctor} · Chair {appt.chair}
                            </Typography>
                        </Box>
                        <Chip label={appt.type} size="small" sx={TREATMENT_CHIP[appt.type].sx} />
                    </Stack>
                    {i < APPOINTMENTS.length - 1 && <Divider sx={{ mx: 2, opacity: 0.5 }} />}
                </Box>
            ))}
        </Paper>

    );
}

export default Appointments;