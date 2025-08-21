import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrismPipe } from '../shared/pipe/prism.pipe';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MenuService } from '../shared/service/menu.service';
import _ from 'lodash';

@Component({
  selector: 'app-string',
  standalone: true,
  imports: [CommonModule, PrismPipe, CardModule, DividerModule],
  templateUrl: './string.component.html',
  styleUrl: './string.component.scss'
})
export class StringComponent {

  selectedMenu!: string | null;

  constructor(private menuServ: MenuService) { }

  ngOnInit() {
    this.menuServ.selectedMenu$.subscribe(item => this.selectedMenu = item);
  }

  // #region padStart
  padStartLo = `
_.padStart('abc', 5); ⇒ "${_.padStart('abc', 5)}"
_.padStart('abc', 5, '＊'); ⇒ "${_.padStart('abc', 5, '＊')}"
_.padStart('abc', 8, '_-'); ⇒ "${_.padStart('abc', 8, '_-')}"
// 例外處理
_.padStart('abc', 1); ⇒ "${_.padStart('abc', 1)}"
`;
  padStartJs = `
'abc'.padStart(5); ⇒ "${'abc'.padStart(5)}"
'abc'.padStart(5, '＊'); ⇒ "${'abc'.padStart(5, '＊')}"
'abc'.padStart(8, '_-'); ⇒ "${'abc'.padStart(8, '_-')}"
// 例外處理
'abc'.padStart(1); ⇒ "${'abc'.padStart(1)}"
`;
  // #endregion

  // #region padEnd
  padEndLo = `
_.padEnd('abc', 5); ⇒ "${_.padEnd('abc', 5)}"
_.padEnd('abc', 5, '＊'); ⇒ "${_.padEnd('abc', 5, '＊')}"
_.padEnd('abc', 8, '_-'); ⇒ "${_.padEnd('abc', 8, '_-')}"
// 例外處理
_.padEnd('abc', 1); ⇒ "${_.padEnd('abc', 1)}"
`;
  padEndJs = `
'abc'.padEnd(5); ⇒ "${'abc'.padEnd(5)}"
'abc'.padEnd(5, '＊'); ⇒ "${'abc'.padEnd(5, '＊')}"
'abc'.padEnd(8, '_-'); ⇒ "${'abc'.padEnd(8, '_-')}"
// 例外處理
'abc'.padEnd(1); ⇒ "${'abc'.padEnd(1)}"
`;
  // #endregion

  // #region pad
  padLo = `
_.pad('abc', 5); ⇒ "${_.pad('abc', 5)}"
_.pad('abc', 5, '＊'); ⇒ "${_.pad('abc', 5, '＊')}"
_.pad('abc', 8, '_-'); ⇒ "${_.pad('abc', 8, '_-')}"
// 例外處理
_.pad('abc', 1); ⇒ "${_.pad('abc', 1)}"
`;

  pad(string: string, length: number, chars = ' ') {

    if (length <= string.length) return string;

    const totalPad = length - string.length;
    const leftPad = Math.floor(totalPad / 2);
    const rightPad = totalPad - leftPad;

    // 先計算重複幾次 chars，然後再截取需要的長度
    const repeatChars = (n: number) => chars.repeat(Math.ceil(n / chars.length)).slice(0, n);

    return repeatChars(leftPad) + string + repeatChars(rightPad);
  }

  padJs = `
pad(string: string, length: number, chars = ' ') {

  if (length <= string.length) return string;

  const totalPad = length - string.length;
  const leftPad = Math.floor(totalPad / 2);
  const rightPad = totalPad - leftPad;

  // 先計算重複幾次 chars，然後再截取需要的長度
  const repeatChars = (n: number) => chars.repeat(Math.ceil(n / chars.length)).slice(0, n);

  return repeatChars(leftPad) + string + repeatChars(rightPad);
}

this.pad('abc', 5); ⇒ "${this.pad('abc', 5)}"
this.pad('abc', 5, '＊'); ⇒ "${this.pad('abc', 5, '＊')}"
this.pad('abc', 8, '_-'); ⇒ "${this.pad('abc', 8, '_-')}"
// 例外處理
this.pad('abc', 1); ⇒ "${this.pad('abc', 1)}"
`;
  // #endregion

  // #region parseInt
  parseIntLo = `
_.parseInt('123.456'); ⇒ ${_.parseInt('123.456')}
_.parseInt('abc123'); ⇒ ${_.parseInt('abc123')}
_.parseInt('123abc'); ⇒ ${_.parseInt('123abc')}
_.parseInt('123.456', 16); ⇒ ${_.parseInt('123.456', 16)}
_.parseInt('123.456', 2); ⇒ ${_.parseInt('123.456', 2)}
// 例外處理
_.parseInt(''); ⇒ ${_.parseInt('')}
_.parseInt('abc'); ⇒ ${_.parseInt('abc')}
_.parseInt('123.456', 0); ⇒ ${_.parseInt('123.456', 0)}
_.parseInt('123.456', 1); ⇒ ${_.parseInt('123.456', 1)}
_.parseInt('123.456', 37); ⇒ ${_.parseInt('123.456', 37)}
`;
  parseIntJs = `
parseInt('123.456'); ⇒ ${parseInt('123.456')}
parseInt('abc123'); ⇒ ${parseInt('abc123')}
parseInt('123abc'); ⇒ ${parseInt('123abc')}
parseInt('123.456', 16); ⇒ ${parseInt('123.456', 16)}
parseInt('123.456', 2); ⇒ ${parseInt('123.456', 2)}
// 例外處理
parseInt(''); ⇒ ${parseInt('')}
parseInt('abc'); ⇒ ${parseInt('abc')}
parseInt('123.456', 0); ⇒ ${parseInt('123.456', 0)}
parseInt('123.456', 1); ⇒ ${parseInt('123.456', 1)}
parseInt('123.456', 37); ⇒ ${parseInt('123.456', 37)}
`;
  // #endregion

  // #region repeat
  repeatLo = `
_.repeat('＊', 3); ⇒ "${_.repeat('＊', 3)}"
_.repeat('abc', 2); ⇒ "${_.repeat('abc', 2)}"
_.repeat('abc', 0); ⇒ "${_.repeat('abc', 0)}"
// 例外處理
_.repeat('abc', -1); ⇒ "${_.repeat('abc', -1)}"
_.repeat('abc', 3.5); ⇒ "${_.repeat('abc', 3.5)}" // 先取整數
_.repeat('abc', Infinity); ⇒ "${_.repeat('abc', Infinity)}"
`;
  repeatJs = `
'＊'.repeat(3); ⇒ "${'＊'.repeat(3)}"
'abc'.repeat(2); ⇒ "${'abc'.repeat(2)}"
'abc'.repeat(0); ⇒ "${'abc'.repeat(0)}"
// 例外處理
'abc'.repeat(-1); ⇒ ❌會報錯
'abc'.repeat(3.5); ⇒ ❌會報錯
'abc'.repeat(Infinity); ⇒ ❌會報錯
`;
  // #endregion

  // #region replace
  replaceLo = `
// 只換第一個
_.replace('Hi A, Hi B, Hi C', 'Hi', 'Bye') ⇒ "${_.replace('Hi A, Hi B, Hi C', 'Hi', 'Bye')}"
// 大小寫需相符
_.replace('hi A, Hi B, Hi C', 'Hi', 'Bye') ⇒ "${_.replace('hi A, Hi B, Hi C', 'Hi', 'Bye')}"
// 正則 g ⇒ global
_.replace('Hi A, Hi B, Hi C', /Hi/g, 'Bye') ⇒ "${_.replace('Hi A, Hi B, Hi C', /Hi/g, 'Bye')}"
`;
  replaceJs = `
'Hi A, Hi B, Hi C'.replace('Hi', 'Bye'); ⇒ "${'Hi A, Hi B, Hi C'.replace('Hi', 'Bye')}"
'hi A, Hi B, Hi C'.replace('Hi', 'Bye'); ⇒ "${'hi A, Hi B, Hi C'.replace('Hi', 'Bye')}"
'Hi A, Hi B, Hi C'.replace(/Hi/g, 'Bye'); ⇒ "${'Hi A, Hi B, Hi C'.replace(/Hi/g, 'Bye')}"
`;
  // #endregion

  // #region snakeCase
  snakeCaseLo = `
_.snakeCase('Foo Bar'); ⇒ "${_.snakeCase('Foo Bar')}"
_.snakeCase('fooBar'); ⇒ "${_.snakeCase('fooBar')}"
_.snakeCase('--FOO-BAR--'); ⇒ "${_.snakeCase('--FOO-BAR--')}"
`;
  caseLo = `
_.camelCase('--FOO-BAR--'); ⇒ "${_.camelCase('--FOO-BAR--')}" // 小駝峰
_.kebabCase('--FOO-BAR--'); ⇒ "${_.kebabCase('--FOO-BAR--')}" // 全小寫 + - 連接
_.snakeCase('--FOO-BAR--'); ⇒ "${_.snakeCase('--FOO-BAR--')}" // 全小寫 + _ 連接
_.startCase('--FOO-BAR--'); ⇒ "${_.startCase('--FOO-BAR--')}" // 字首大寫 + 空格分隔
_.upperCase('--FOO-BAR--'); ⇒ "${_.upperCase('--FOO-BAR--')}" // 全大寫 + 空格分隔
_.lowerCase('--FOO-BAR--'); ⇒ "${_.lowerCase('--FOO-BAR--')}" // 全小寫 + 空格分隔
// 沒有大駝峰
`;
  // #endregion

  // #region split
  splitLo = `
_.split('a-b-c', '-'); ⇒ [${_.split('a-b-c', '-')}]
_.split('a-b-c', '-', 2); ⇒ [${_.split('a-b-c', '-', 2)}]
// 例外處理
_.split(null, '-'); ⇒ [${_.split(null, '-')}]
`;
  splitJs = `
'a-b-c'.split('-'); ⇒ [${'a-b-c'.split('-')}]
'a-b-c'.split('-', 2); ⇒ [${'a-b-c'.split('-', 2)}]
null.split('-'); ⇒ ❌會報錯
`;
  // #endregion

  // #region startCase
  startCaseLo = `
_.startCase('Foo Bar'); ⇒ "${_.startCase('Foo Bar')}"
_.startCase('fooBar'); ⇒ "${_.startCase('fooBar')}"
_.startCase('--FOO-BAR--'); ⇒ "${_.startCase('--FOO-BAR--')}"
`;
  // #endregion

  // #region startsWith
  startsWithLo = `
_.startsWith('abc', 'a'); ⇒ ${_.startsWith('abc', 'a')}
_.startsWith('abc', 'b'); ⇒ ${_.startsWith('abc', 'b')}
_.startsWith('abc', 'b', 1); ⇒ ${_.startsWith('abc', 'b', 1)}
_.startsWith(undefined, 'a'); ⇒ ${_.startsWith(undefined, 'a')}
`;
  startsWithJs = `
'abc'.startsWith('a'); ⇒ ${'abc'.startsWith('a')}
'abc'.startsWith('b'); ⇒ ${'abc'.startsWith('b')}
'abc'.startsWith('b', 1); ⇒ ${'abc'.startsWith('b', 1)}
undefined.startsWith('a'); ⇒ ❌會報錯
`;
  // #endregion
}
