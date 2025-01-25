var chartDom = document.getElementById('main4');
var myChart = echarts.init(chartDom);
var option;

option = {
    // 标题居中且放大
    title: {
        text: 'Population Changes of Ecosystem Species Over Time',
        left: 'center',

        textStyle: {
            fontSize: 24
        }
    },

    // title: {
    //     text: 'Population Changes of Ecosystem Species Over Time'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    // 图例放大

    legend: {
        top: '10%',
        textStyle: {
            fontSize: 30

        },
        data: ['Producers (P)', 'Herbivores (H)', 'Carnivores (C)', 'Decomposers (D)']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['1980', '1990', '2000', '2010', '2020', '2025']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],


    series: [

        {
            name: 'Decomposers (D)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [300, 400, 550, 650, 800, 850]
        },
        {
            name: 'Producers (P)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [500, 720, 850, 900, 980, 990]
        },
        {
            name: 'Herbivores (H)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [200, 250, 300, 320, 250, 180]
        },

        {
            name: 'Carnivores (C)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [50, 60, 75, 80, 60, 50]
        },

    ]
};

option && myChart.setOption(option);