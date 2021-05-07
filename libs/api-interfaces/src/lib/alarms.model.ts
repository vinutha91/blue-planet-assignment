export interface AlarmsPayload {
    offset: number;
    limit: number;
    total: number;
    items: unknown[]
}

// unknown because the properties are containing "-". Not a best practice to have - in property name.
// Else I would prefer data massaging and strict contracts.
