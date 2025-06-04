import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { MenuService } from '../shared/service/menu.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private menuServ: MenuService) { }

  menus: TreeNode[] = [
    {
      label: 'Collection',
      expanded: true,
      children: [
        { label: '_.invokeMap' },
        { label: '_.keyBy' },
        { label: '_.map' },
        { label: '_.orderBy' },
        { label: '_.partition' },
        { label: '_.reduce' },
        { label: '_.reduceRight' },
        { label: '_.reject' },
        { label: '_.sample' },
        { label: '_.sampleSize' },
        { label: '_.shuffle' },
        { label: '_.size' },
        { label: '_.some' },
        { label: '_.sortBy' }
      ]
    }
  ];

  onMenuChange(event: any) {
    this.menuServ.selectedMenu$.next(event.label);
  }
}
