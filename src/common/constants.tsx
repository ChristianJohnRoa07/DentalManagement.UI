import { type PatientStatus, type TreatmentType } from "../common/types"
import { type Appointment, type Patient, type BillingRow } from "../common/interface"

export const TREATMENT_CHIP: Record<TreatmentType, { sx: object }> = {
    Cleaning: { sx: { bgcolor: "#DCFCE7", color: "#166534" } },
    "X-Ray": { sx: { bgcolor: "#DBEAFE", color: "#1E40AF" } },
    Filling: { sx: { bgcolor: "#FEF3C7", color: "#92400E" } },
    Consult: { sx: { bgcolor: "#EDE9FE", color: "#4C1D95" } },
    Ortho: { sx: { bgcolor: "#FCE7F3", color: "#831843" } },
    Extraction: { sx: { bgcolor: "#FEE2E2", color: "#7F1D1D" } },
};

export const PATIENT_AVATAR = [
    { bgcolor: "#E0F4EE", color: "#0A7558" },
    { bgcolor: "#FEF3C7", color: "#92400E" },
    { bgcolor: "#EDE9FE", color: "#4C1D95" },
    { bgcolor: "#FEE2E2", color: "#7F1D1D" },
    { bgcolor: "#DBEAFE", color: "#1E40AF" },
];

export const STATUS_CHIP: Record<PatientStatus, object> = {
    "Active": { bgcolor: "#DCFCE7", color: "#166534" },
    "Follow-up": { bgcolor: "#FEF3C7", color: "#92400E" },
    "Overdue": { bgcolor: "#FEE2E2", color: "#7F1D1D" },
};

export const BILLING_COLOR: Record<string, string> = {
    warning: "#D97706",
    danger: "#DC2626",
    success: "#0F9B75",
};

export const DentalUI = {
    DRAWER_WIDTH: 228
} as const;


//  Dummy data
export const APPOINTMENTS: Appointment[] = [
    { time: "09:00", name: "Sarah Lin", initials: "SL", doctor: "Rivera", chair: "1", type: "Cleaning" },
    { time: "09:45", name: "Marcus Johnson", initials: "MJ", doctor: "Chen", chair: "2", type: "X-Ray" },
    { time: "10:30", name: "Aisha Patel", initials: "AP", doctor: "Rivera", chair: "1", type: "Filling" },
    { time: "11:15", name: "Tom Walker", initials: "TW", doctor: "Chen", chair: "3", type: "Consult" },
    { time: "14:00", name: "Emma Kim", initials: "EK", doctor: "Rivera", chair: "1", type: "Ortho" },
    { time: "15:30", name: "Ryan Brooks", initials: "RB", doctor: "Chen", chair: "2", type: "Extraction" },
];

export const PATIENTS: Patient[] = [
    { name: "Sarah Lin", initials: "SL", lastVisit: "Today", treatment: "Cleaning", status: "Active" },
    { name: "Aisha Patel", initials: "AP", lastVisit: "Today", treatment: "Filling", status: "Active" },
    { name: "James Hart", initials: "JH", lastVisit: "Mar 18", treatment: "Root Canal", status: "Follow-up" },
    { name: "Nina Rodriguez", initials: "NR", lastVisit: "Feb 12", treatment: "Check-up", status: "Overdue" },
    { name: "Chris Wong", initials: "CW", lastVisit: "Mar 22", treatment: "Ortho", status: "Active" },
];

export const BILLING_ROWS: BillingRow[] = [
    { label: "Collected today", amount: "$1,840" },
    { label: "Outstanding (30d)", amount: "$3,220", variant: "warning" },
    { label: "Insurance pending", amount: "$6,480" },
    { label: "Overdue (>60d)", amount: "$910", variant: "danger" },
    { label: "Month-to-date", amount: "$24,600", variant: "success" },
];

export const WEEK = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    thisWeek: [62, 75, 80, 90, 68, 48, 12],
    lastWeek: [55, 40, 65, 50, 45, 30, 20],
};