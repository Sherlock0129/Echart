// 获取图表容器元素
var chartDom = document.getElementById('main');
// 初始化 ECharts 实例
var myChart = echarts.init(chartDom);
var option;

// 你的实际数据
var data = [
    { indicator: 'Crop yield', subModel: 'AAPM', weight: 0.35 },
    { indicator: 'Ecological impacts', subModel: 'ERAS', weight: 0.25 },
    { indicator: 'Cost effectiveness', subModel: 'PSVM', weight: 0.20 },
    { indicator: 'Sustainability', subModel: 'MDRI', weight: 0.15 },
    { indicator: 'Life cycle', subModel: 'CALO', weight: 0.05 }
];

// 转换数据格式以适配 ECharts
var formattedData = data.map(item => {
    return {
        value: item.weight * 100,  // 为了显示方便，将权重乘以 100
        name: `${item.indicator} (${item.subModel})`
    };
});

option = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: formattedData
        }
    ]
};

// 设置图表选项
option && myChart.setOption(option);