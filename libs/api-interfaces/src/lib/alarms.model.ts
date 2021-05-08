import { PieChartModel } from "./pie-chart.model";
import { TabMenuItem } from "./tab-menu-item.model";

export interface AlarmsPayload {
    offset: number;
    limit: number;
    total: number;
    items: unknown[],
    errors: unknown[],
    facets: unknown
}

// unknown because the properties are containing "-". Not a best practice to have - in property name.
// Else I would prefer data massaging and strict contracts.

export interface Alarm {
    severity: string;
    description: string;
    nodeType: string;
    clearable: string;
    state: AlarmState,
    raiseTime: Date
}

export interface AlarmColumn {
    field: string;
    header: string
}

export enum AlarmState {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE'
}

export interface AlarmsResponse {
    alarms: Alarm[],
    chartData: PieChartModel,
    tabMenuItems: TabMenuItem[]
}