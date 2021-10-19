import Highcharts from 'highcharts'
import HC_More from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import styles from './skill-chart.module.css';

if (typeof Highcharts === 'object') {
    HC_More(Highcharts)
}

const options = {
    chart: {
        polar: true,
        type: 'area',
        backgroundColor: '#F5F4F4',
        // height: '100%'
    },
    legend: {
        enabled: false
    },

    title: {
        text: '',
        x: 0
    },

    pane: {
        // size: '80%'
    },

    xAxis: {
        categories: ['NodeJs', 'Javascript', 'HTML', 'CSS',
            'Ethereum', 'React'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: false
    },
    series: [{
        name: 'Expertise Level',
        data: [8, 8, 7, 5, 3, 8],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                pane: {
                    size: '100%'
                }
            }
        }]
    }

};

const SkillsChart = () => <div className={styles['chart-container']}>
    <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={options}/>
</div>
export default SkillsChart;
