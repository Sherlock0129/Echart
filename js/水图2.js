var chartDom = document.getElementById('main5');
var myChart = echarts.init(chartDom);
var option;
myChart.showLoading();

$.get('./js/sangji.json', function (data) {
    myChart.hideLoading();
    myChart.setOption(
        (option = {
            title: {
                text: 'Sankey Diagram'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'sankey',
                    // 放大·字体
                    label: {
                        fontSize: 24,
                        fontWeight: 'bold'
                    },
                    data: data.nodes,
                    links: data.links,
                    emphasis: {
                        focus: 'adjacency'
                    },
                    lineStyle: {
                        color: 'gradient',
                        curveness: 0.5
                    }
                }
            ]
        })
        //

    );
});

option && myChart.setOption(option);