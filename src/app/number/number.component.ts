import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MenuService } from '../shared/service/menu.service';
import { PrismPipe } from '../shared/pipe/prism.pipe';
import _ from 'lodash';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [CommonModule, PrismPipe, CardModule, DividerModule],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss'
})
export class NumberComponent implements OnInit {

  selectedMenu!: string | null;

  constructor(private menuServ: MenuService) { }

  ngOnInit() {
    this.menuServ.selectedMenu$.subscribe(item => this.selectedMenu = item);
  }

  // #region clamp
  clampLo = `_.clamp(10, 1, 5); ⇒ ${_.clamp(10, 1, 5)}`;
  clampJs = `Math.max(1, Math.min(10, 5)); ⇒ ${Math.max(1, Math.min(10, 5))}`;
  // #endregion

  // #region inRange
  inRangeLo = `
_.inRange(3, 2, 5); ⇒ ${_.inRange(3, 2, 5)}
_.inRange(4, 8); ⇒ ${_.inRange(4, 8)}
_.inRange(4, 2); ⇒ ${_.inRange(4, 2)}
_.inRange(2, 2); ⇒ ${_.inRange(2, 2)}
_.inRange(1.2, 2); ⇒ ${_.inRange(1.2, 2)}
_.inRange(5.2, 4); ⇒ ${_.inRange(5.2, 4)}
_.inRange(-3, -2, -6); ⇒ ${_.inRange(-3, -2, -6)}
`;

  inRangeJs = `
3 > 2 && 3 < 5; ⇒ ${3 > 2 && 3 < 5}
4 >= 0 && 4 < 8; ⇒ ${4 >= 0 && 4 < 8}
4 >= 0 && 4 < 2; ⇒ ${4 >= 0 && 4 < 2}
2 > 2 && 2 < 0; ⇒ ${2 > 2 && 2 < 0}
1.2 >= 0 && 1.2 < 2; ⇒ ${1.2 >= 0 && 1.2 < 2}
5.2 >= 0 && 5.2 < 4; ⇒ ${5.2 >= 0 && 5.2 < 4}
-3 >= -6 && -3 < -2; ⇒ ${-3 >= -6 && -3 < -2}
`;
  // #endregion

  // #region random
  randomLo = `_.random(5, 10); ⇒ ${_.random(5, 10)}
_.random(5); ⇒ ${_.random(5)}
_.random(5, true); ⇒ ${_.random(5, true)}
_.random(5, 10, true); ⇒ ${_.random(5, 10, true)}`;
  // #endregion

}
