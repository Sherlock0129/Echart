var chartDom = document.getElementById('main3');
var myChart = echarts.init(chartDom);
var option;

// 假设土壤肥力取值范围0 - 1，均匀间隔取值，转换为更易读的标签
var soilFertility = [
    'Low fertility (0.1) ',
    ' Low fertility (0.3) ',
    ' Medium fertility (0.5) ',
    ' High fertility (0.7) ',
    ' High fertility (0.9) '
];
// 害虫数量每平方米数量
var pestNumbers = [10, 20, 30];
// 作物生长环境因素数据
var data = [
    [0, 0, 1.5],
    [0, 1, 1.2],
    [0, 2, 0.9],
    [1, 0, 2.2],
    [1, 1, 1.8],
    [1, 2, 1.4],
    [2, 0, 2.8],
    [2, 1, 2.4],
    [2, 2, 2.0],
    [3, 0, 3.2],
    [3, 1, 2.8],
    [3, 2, 2.4],
    [4, 0, 3.5],
    [4, 1, 3.0],
    [4, 2, 2.6]
];

option = {
    tooltip: {},
    visualMap: {
        max: 4,
        inRange: {
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ]
        }
    },
    xAxis3D: {
        type: 'category',
        data: soilFertility
    },
    yAxis3D: {
        type: 'category',
        data: pestNumbers.map(String),
        name: 'Number of pests per square meter'
    },
    zAxis3D: {
        type: 'value',
        name: 'Crop growth rate'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [
        {
            type: 'bar3D',
            data: data.map(function (item) {
                return {
                    value: [item[0], item[1], item[2]]
                };
            }),
            shading: 'color',
            label: {
                show: true,
                fontSize: 12,
                formatter: '{c}'
            },
            itemStyle: {
                opacity: 0.8
            },
            emphasis: {
                label: {
                    fontSize: 16,
                    color: '#900'
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }
    ]
};

option && myChart.setOption(option);

option && myChart.setOption(option);