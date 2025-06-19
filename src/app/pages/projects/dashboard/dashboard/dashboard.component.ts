import { Component, AfterViewInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';
import Chart from 'chart.js/auto';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent implements AfterViewInit {

  userInfo: any
  backgroundClass: string = '';

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.userInfo = this.loginService.getUserInfo()
  }

  ngAfterViewInit(): void {
    new Chart('dashboardPieChart', {
      type: 'doughnut',
      data: {
        labels: ['Institución 1', 'Institución 2', 'Institución 3', 'Institución 4', 'Institución 5'],
        datasets: [{
          data: [10, 5, 20, 20, 15],
          backgroundColor: ['#3b82f6', '#f59e0b', '#00dc82', '#ef4444', '#ff6384'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });

    // Agrega el gráfico de línea
    new Chart('dashboardLineChart', {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Reportes',
          data: [12, 19, 3, 5, 2, 8],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#3b82f6',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#e5e7eb'
            }
          }
        }
      }
    });

    // Agrega el gráfico de barras
    new Chart('dashboardBarChart', {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Pacientes',
          data: [8, 15, 12, 6, 9, 13],
          backgroundColor: '#f59e0b',
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#e5e7eb'
            }
          }
        }
      }
    });

    // Gráfica de barras horizontal para cantidad de exámenes por tipo de especialista
    new Chart('dashboardHorizontalBarChart', {
      type: 'bar',
      data: {
        labels: ['Radiólogo', 'Cirujano de mama', 'Patólogo'],
        datasets: [{
          label: 'Cantidad de exámenes',
          data: [25, 12, 8], // Ajusta los valores según tus datos reales
          backgroundColor: ['#3b82f6', '#f59e0b', '#ef4444'],
          borderRadius: 8,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: '#e5e7eb'
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  getBackgroundImage(): string {
    if (this.userInfo.userProject === 'Phantom') {
      return "url('/assets/img/bg.jpg')";
    } else if (this.userInfo.userProject === 'Tamización Mama') {
      return "url('/assets/img/bg_mama.jpg')";
    } else {
      return "none";
    }
  }

}
