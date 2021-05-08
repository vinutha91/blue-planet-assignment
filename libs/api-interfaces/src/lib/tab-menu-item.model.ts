export interface TabMenuItem {
    label: string;
    event: string;
    icon?: string;
    command?: (event: any) => void;
}