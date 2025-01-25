//读取3D散点_处理后.json文件

$.getJSON('./js/3D散点_处理后.json', function (jsonData) {


Highcharts.chart('fin', {
    chart: {
        type: 'area',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 30,
            depth: 200
        }
    },
    title: {
        text: 'Changes in cultivated land (% of land area) (1961-2022)'
    },
    accessibility: {
        description: 'The chart is showing the shapes of three mountain ' +
            'ranges as three area line series laid out in 3D behind each ' +
            'other.',
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },
    lang: {
        accessibility: {
            axis: {
                xAxisDescriptionPlural: 'The chart has 3 unlabelled X axes, ' +
                    'one for each series.'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Arable land (% of land area)',
            x: -40
        },
        labels: {
            format: '{value:,.0f} ',
            size: 24,
            weight: 'bold'
        },
        gridLineDashStyle: 'Dash'
    },
    xAxis: [{
        visible: true
    }, {
        visible: false
    }, {
        visible: false
    }],
    plotOptions: {
        area: {
            depth: 100,
            marker: {
                enabled: false
            },
            states: {
                inactive: {
                    enabled: false
                }
            }
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    series: [
        {
            name: 'Brazil',
            lineColor: 'rgb(180,90,50)',
            color: 'rgb(200,110,50)',
            fillColor: 'rgb(200,110,50)',
            data: jsonData["巴西"]
        },
        {
            xAxis: 1,
            lineColor: 'rgb(120,160,180)',
            color: 'rgb(140,180,200)',
            fillColor: 'rgb(140,180,200)',
            name: 'World',
            data: jsonData["世界"]
        },
        {
            xAxis: 2,
            lineColor: 'rgb(180, 140, 180)',
            color: 'rgb(180, 140, 180)',
            fillColor: 'rgb(180, 140, 180)',
            name: 'United States',
            data: jsonData["美国"]
        },
        // {
        //     xAxis: 3,
        //     lineColor: 'rgb(180, 140, 180)',
        //     color: 'rgb(180, 140, 180)',
        //     fillColor: 'rgb(180, 140, 180)',
        //     name: '日本',
        //     data: jsonData["日本"]
        // },
        // {
        //     xAxis: 4,
        //     lineColor: 'rgb(180, 140, 180)',
        //     color: 'rgb(180, 140, 180)',
        //     fillColor: 'rgb(180, 140, 180)',
        //     name: '中国',
        //     data: jsonData["中国"]
        // },
        // {
        //     xAxis: 5,
        //     lineColor: 'rgb(180, 140, 180)',
        //     color: 'rgb(180, 140, 180)',
        //     fillColor: 'rgb(180, 140, 180)',
        //     name: '日本',
        //     data: jsonData["日本"]
        // },
        // {
        //     xAxis: 6,
        //     lineColor: 'rgb(180, 140, 180)',
        //     color: 'rgb(180, 140, 180)',
        //     fillColor: 'rgb(180, 140, 180)',
        //     name: '世界',
        //     data: jsonData["世界"]
        // },
        // {
        //     xAxis: 7,
        //     lineColor: 'rgb(180, 140, 180)',
        //     color: 'rgb(180, 140, 180)',
        //     fillColor: 'rgb(180, 140, 180)',
        //     name: '阿根廷',
        //     data: jsonData["阿根廷"]
        // },
        // {
        //     xAxis: 8,
        //     lineColor: 'rgb(180, 140, 180)',
        //     color: 'rgb(180, 140, 180)',
        //     fillColor: 'rgb(180, 140, 180)',
        //     name: '加拿大',
        //     data: jsonData["加拿大"]
        // },

    ]
});});