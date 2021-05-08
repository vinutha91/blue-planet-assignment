export interface PieChartModel {
    labels: string[],
    datasets: [{
        data: number[],
        backgroundColor: string[],
        hoverBackgroundColor: string[]
    }]
}
