import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { MenuService } from '../shared/service/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(
    private menuServ: MenuService,
    private router: Router
  ) { }

  menus: TreeNode[] = [
    {
      label: 'Collection',
      data: '/collection',
      expanded: false,
      children: [
        { label: '_.invokeMap', data: '/collection' },
        { label: '_.map', data: '/collection' },
        { label: '_.keyBy', data: '/collection' },
        { label: '_.sortBy', data: '/collection' },
        { label: '_.orderBy', data: '/collection' },
        { label: '_.partition', data: '/collection' },
        { label: '_.reduce', data: '/collection' },
        { label: '_.reduceRight', data: '/collection' },
        { label: '_.reject', data: '/collection' },
        { label: '_.sample', data: '/collection' },
        { label: '_.sampleSize', data: '/collection' },
        { label: '_.shuffle', data: '/collection' },
        { label: '_.size', data: '/collection' },
        { label: '_.some', data: '/collection' }
      ]
    },
    {
      label: 'Lang',
      data: '/lang',
      expanded: false,
      children: [
        { label: '_.lt', data: '/lang' },
        { label: '_.lte', data: '/lang' },
        { label: '_.toArray', data: '/lang' },
        { label: '_.toFinite', data: '/lang' },
        { label: '_.toInteger', data: '/lang' },
        { label: '_.toLength', data: '/lang' },
        { label: '_.toNumber', data: '/lang' },
        { label: '_.toPlainObject', data: '/lang' },
        { label: '_.toSafeInteger', data: '/lang' },
        { label: '_.toString', data: '/lang' }
      ]
    },
    {
      label: 'Number',
      data: '/number',
      expanded: false,
      children: [
        { label: '_.clamp', data: '/number' },
        { label: '_.inRange', data: '/number' },
        { label: '_.random', data: '/number' }
      ]
    },
    {
      label: 'String',
      data: '/string',
      expanded: true,
      children: [
        { label: '_.padStart', data: '/string' },
        { label: '_.padEnd', data: '/string' },
        { label: '_.pad', data: '/string' },
        { label: '_.parseInt', data: '/string' },
        { label: '_.repeat', data: '/string' },
        { label: '_.replace', data: '/string' },
        { label: '_.snakeCase', data: '/string' },
        { label: '_.split', data: '/string' },
        { label: '_.startCase', data: '/string' },
        { label: '_.startsWith', data: '/string' },
      ]
    }
  ];

  onMenuChange(event: any) {
    this.menuServ.selectedMenu$.next(event.label);
    this.router.navigate([event.data]);
  }
}
