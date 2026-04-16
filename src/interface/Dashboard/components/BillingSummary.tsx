import { alpha } from "@mui/material/styles";
import {
    Box,
    Divider,
    Stack,
    Typography,
    Paper
} from "@mui/material";
import { type BillingSummaryProps } from "../../../common/interface"
import {
    BILLING_COLOR,
} from "../../../common/constants";

function BillingSummary({ billingSummaryData }: BillingSummaryProps) {
    return (

        <Paper elevation={0} sx={{ border: "1px solid #F3F4F6", borderRadius: 3, display: "flex", flexDirection: "column" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center"
                px={2} py={1.5} sx={{ borderBottom: "1px solid #F9FAFB" }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>Billing Summary</Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "primary.main", cursor: "pointer" }}>
                    Details →
                </Typography>
            </Stack>

            <Box sx={{ flex: 1 }}>
                {billingSummaryData.map((row, i) => (
                    <Box key={row.label}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" px={2} py={1.25}>
                            <Typography sx={{
                                fontSize: "0.8rem",
                                fontWeight: row.variant === "success" ? 600 : 400,
                                color: row.variant === "success" ? "text.primary" : "text.secondary",
                            }}>
                                {row.label}
                            </Typography>
                            <Typography sx={{
                                fontSize: "0.8rem", fontWeight: 600,
                                color: row.variant ? BILLING_COLOR[row.variant] : "text.primary",
                            }}>
                                {row.amount}
                            </Typography>
                        </Stack>
                        {i < billingSummaryData.length - 1 && <Divider sx={{ mx: 2, opacity: 0.5 }} />}
                    </Box>
                ))}
            </Box>

            <Box px={2} pb={2}>
                <Box sx={{ bgcolor: alpha("#0F9B75", 0.08), borderRadius: 2, px: 1.75, py: 1.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography sx={{ fontSize: "0.65rem", fontWeight: 600, color: "primary.dark", mb: 0.25 }}>
                                Collection rate
                            </Typography>
                            <Typography sx={{
                                fontSize: "1.35rem", fontWeight: 700, color: "primary.dark",
                                letterSpacing: "-0.5px", lineHeight: 1
                            }}>
                                87.4%
                            </Typography>
                        </Box>
                        <Box textAlign="right">
                            <Typography sx={{ fontSize: "0.65rem", color: "primary.main" }}>Goal: 90%</Typography>
                            <Typography sx={{ fontSize: "0.65rem", color: "primary.main", mt: 0.25 }}>
                                ↑ 2.1% vs last mo.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Paper>
    );
}

export default BillingSummary;