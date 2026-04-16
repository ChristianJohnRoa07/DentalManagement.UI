import { type PatientStatus, type TreatmentType } from "../common/types"


declare module '@mui/material/styles' {
  interface Palette {
    treatmentTypes: Record<TreatmentType, TreatmentColors>;
  }
  interface PaletteOptions {
    treatmentTypes?: Record<TreatmentType, TreatmentColors>;
  }
}

export interface TreatmentColors {
  bgcolor: string;
  textColor: string;
}

export interface Appointment {
    time: string;
    name: string;
    initials: string;
    doctor: string;
    chair: string;
    type: TreatmentType;
}

export interface Patient {
    name: string;
    initials: string;
    lastVisit: string;
    treatment: string;
    status: PatientStatus;
}

export interface BillingRow {
    label: string;
    amount: string;
    variant?: "warning" | "danger" | "success";
}

export interface NavItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    badge?: number;
}

export interface NavSection {
    section: string;
    items: NavItem[];
}

// Props
export interface MetricCardProps {
    key: string;
    label: string;
    value: string;
    delta: string;
    up: boolean;
    iconBg: string;
    icon: React.ReactNode;
}

export interface SidebarProps {
    activeNav: string;
    setActiveNav: (val: string) => void;
}

export interface AppointmentProps {
    appointments: Appointment[];
}

export interface BillingSummaryProps {
    billingSummaryData: BillingRow[];
}

export interface RecentPatientProps {
    recentPatientsData: Patient[];
}