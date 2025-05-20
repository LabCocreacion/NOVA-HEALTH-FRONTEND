import { Component } from '@angular/core';

@Component({
    selector: 'app-create-report',
    templateUrl: './create-report.component.html',
    styleUrls: ['./create-report.component.css'],
    standalone: false
})
export class CreateReportComponent {
    today: string = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD

    displayFiles(event: Event): void {
        const input = event.target as HTMLInputElement;
        const fileList = document.getElementById('fileList') as HTMLUListElement;

        // Clear the existing file list
        fileList.innerHTML = '';

        if (input.files && input.files.length > 0) {
            Array.from(input.files).forEach(file => {
                const listItem = document.createElement('li');
                listItem.textContent = file.name; // Ensure only the file name is displayed
                fileList.appendChild(listItem);
            });
        } else {
            const noFilesItem = document.createElement('li');
            noFilesItem.textContent = 'No se seleccionaron archivos.';
            fileList.appendChild(noFilesItem);
        }
    }
}
