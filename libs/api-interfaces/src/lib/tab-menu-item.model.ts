export interface TabMenuItem {
    label: string;
    event: string;
    index: number;
    icon?: string;
    command?: (event: any) => void;
}