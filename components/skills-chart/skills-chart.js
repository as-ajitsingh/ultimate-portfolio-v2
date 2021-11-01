import {Radar} from 'react-chartjs-2';
import styles from './skill-chart.module.css';

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scaleShowLabels: false,
    scale: {
        display: false
    },
    scales: {
        r: {
            ticks: {
                display: false
            },
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 10
        }
    }
}

const data = {
    labels: ['NodeJs', 'Javascript', 'HTML', 'CSS', 'Ethereum', 'React'],
    datasets: [{
        data: [8, 8, 7, 5, 3, 8],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};

const SkillsChart = () => <div className={styles['chart-container']}>
    <Radar className={styles['chart-radar']} data={data} options={options}/>
</div>
export default SkillsChart;
