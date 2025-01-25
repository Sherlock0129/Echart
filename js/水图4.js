var chartDom = document.getElementById('main7');


var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.getJSON('./js/gx.json', function (graph) {
    myChart.hideLoading();
    option = {
        tooltip: {},
        legend: [
            {
                //修改图例的字体大小
                textStyle: {
                    fontSize: 24,
                    fontWeight: 'bold'
                },
                data: graph.categories.map(function (a) {
                    return a.name;
                })
            }
        ],
        series: [
            {

                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                focusNodeAdjacency: true,

                label: {
                    show: true,
                    position: 'right',
                    formatter: function (params) {
                        return params.data.name + ' (' + params.data.value + ')'; // Modify this line to display value
                    },
                    // formatter: '{b}',
                    fontSize: 24,
                    fontWeight: 'bold',
                },
                labelLayout: {
                    hideOverlap: true,

                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3,
                    width: 2
                }
            }
        ]
    };
    myChart.setOption(option);
});

option && myChart.setOption(option);
