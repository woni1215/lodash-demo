import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
