import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MenuService } from '../shared/service/menu.service';
import { PrismPipe } from '../shared/pipe/prism.pipe';
import _ from 'lodash';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [CommonModule, PrismPipe, CardModule, DividerModule, InputTextModule, FormsModule],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent implements OnInit {

  selectedMenu!: string | null;
  instance: any;

  constructor(private menuServ: MenuService) { }

  ngOnInit() {
    this.menuServ.selectedMenu$.subscribe(item => this.selectedMenu = item);
    (this.Foo as any).prototype.c = 3;
    this.instance = new this.Foo();
  }

  // #region lt
  ltLo = `_.lt(3, 5);`;
  ltJs = `3 < 5;`;
  lt = JSON.stringify(_.lt(3, 5));
  // lt = JSON.stringify(3 < 5);

  lt2Lo = `_.lt(5, 5);`;
  lt2Js = `5 < 5;`;
  lt2 = JSON.stringify(_.lt(5, 5));
  // lt2 = JSON.stringify(5 < 5);

  lt3Lo = `
_.lt(null, undefined); ⇒ ${_.lt(null, undefined)}
_.lt(undefined, null); ⇒ ${_.lt(undefined, null)}
_.lt(undefined, 5); ⇒ ${_.lt(undefined, 5)}
_.lt(null, 5); ⇒ ${_.lt(null, 5)}
_.lt(null, -5); ⇒ ${_.lt(null, -5)}
_.lt(null, null); ⇒ ${_.lt(null, null)}
_.lt(undefined, undefined); ⇒ ${_.lt(undefined, undefined)}
_.lt('', ''); ⇒ ${_.lt('', '')}
  `;
  lt3Js = `null < undefined;`;

  // #endregion

  // #region lte
  lteLo = `_.lte(5, 5);`;
  lteJs = `5 <= 5;`;
  lte = JSON.stringify(_.lte(5, 5));
  // lte = JSON.stringify(5 <= 5);

  lte2Lo = `
_.lte(null, undefined); ⇒ ${_.lte(null, undefined)}
_.lte(undefined, null); ⇒ ${_.lte(undefined, null)}
_.lte(undefined, 5); ⇒ ${_.lte(undefined, 5)}
_.lte(null, 5); ⇒ ${_.lte(null, 5)}
_.lte(null, -5); ⇒ ${_.lte(null, -5)}
_.lte(null, null); ⇒ ${_.lte(null, null)}
_.lte(undefined, undefined); ⇒ ${_.lte(undefined, undefined)}
_.lte('', ''); ⇒ ${_.lte('', '')}
  `;
  lte2Js = `null <= null;`;

  // #endregion

  // #region toArray
  toArrayOrg = `{ 'a': 1, 'b': 2 }`;
  toArrayLo = `_.toArray({ 'a': 1, 'b': 2 });`;
  toArrayJs = `Object.values({ a: 1, b: 2 });`;
  toArray = JSON.stringify(_.toArray({ 'a': 1, 'b': 2 }));
  // toArray = JSON.stringify(Object.values({ a: 1, b: 2 }));

  toArray2Org = `'abc'`;
  toArray2Lo = `_.toArray('abc');`;
  toArray2Js = `Array.from('abc');`;
  toArray2 = JSON.stringify(_.toArray('abc'));
  // toArray2 = JSON.stringify(Array.from('abc'));

  toArray3Org = `1`;
  toArray3Lo = `_.toArray(1);`;
  toArray3Js = `Array.from(1);`;
  toArray3 = JSON.stringify(_.toArray(1));

  toArray4Org = `null`;
  toArray4Lo = `_.toArray(null);`;
  toArray4Js = `Array.from(null);`;
  toArray4 = JSON.stringify(_.toArray(null));
  // #endregion

  // #region toFinite
  toFiniteLo = `_.toFinite(NaN);`;
  toFiniteJs = `Number.isFinite(NaN) ? NaN : 0;`;
  toFinite = JSON.stringify(_.toFinite(NaN));
  // toFinite = JSON.stringify(Number.isFinite(NaN) ? NaN : 0);

  toFinite2Lo = `
_.toFinite(3.2); ⇒ ${_.toFinite(3.2)}
_.toFinite(Number.MIN_VALUE); ⇒ ${_.toFinite(Number.MIN_VALUE)}
_.toFinite(Number.MAX_VALUE); ⇒ ${_.toFinite(Number.MAX_VALUE)}
_.toFinite(Infinity); ⇒ ${_.toFinite(Infinity)}
_.toFinite(-Infinity); ⇒ ${_.toFinite(-Infinity)}
_.toFinite(null); ⇒ ${_.toFinite(null)}
_.toFinite(undefined); ⇒ ${_.toFinite(undefined)}
_.toFinite({}); ⇒ ${_.toFinite({})}`;
  // #endregion

  // #region toInteger
  toIntegerLo = `_.toInteger(3.6);`;
  toIntegerJs = `Math.trunc(3.6);`;
  toInteger = JSON.stringify(_.toInteger(3.6));
  // toInteger = JSON.stringify(Math.trunc(3.6));

  toInteger2Lo = `_.toInteger(3.2);`;
  toInteger2Js = `Math.trunc(3.2);`;
  toInteger2 = JSON.stringify(_.toInteger(3.2));
  // toInteger2 = JSON.stringify(Math.trunc(3.2));

  toInteger3Lo = `_.toInteger(Infinity);`;
  toInteger3Js = `Math.trunc(Infinity);`;
  toInteger3 = JSON.stringify(_.toInteger(Infinity));
  // toInteger3 = JSON.stringify(Math.trunc(Infinity));
  // #endregion

  // #region toLength
  toLengthLo = `
_.toLength(3.9) ⇒ ${_.toLength(3.9)}
_.toLength('10') ⇒ ${_.toLength('10')}
_.toLength(Infinity) ⇒ ${_.toLength(Infinity)}
_.toLength(null) ⇒ ${_.toLength(null)}
_.toLength(undefined) ⇒ ${_.toLength(undefined)}
_.toLength(-5) ⇒ ${_.toLength(-5)}
_.toLength('abc') ⇒ ${_.toLength('abc')}
_.toLength(9999999999) ⇒ ${_.toLength(9999999999)}`;

  toLength2Lo: any = 10;
  get toLength2Res() {
    const len = _.toLength(this.toLength2Lo);
    return len === 0 ? "[]" : Array(len).fill('🟡');
  }
  get toLength2() {
    return `_.toLength("${this.toLength2Lo}");`;
  }
  // #endregion

  // #region toNumber
  toNumberLo = `
_.toNumber(3.2) ⇒ ${_.toNumber(3.2)}
_.toNumber(Number.MIN_VALUE) ⇒ ${_.toNumber(Number.MIN_VALUE)}
_.toNumber(Infinity) ⇒ ${_.toNumber(Infinity)}
_.toNumber('3.2') ⇒ ${_.toNumber('3.2')}`;

  toNumber2Lo = `
_.toNumber(undefined) ⇒ ${_.toNumber(undefined)}
_.toNumber({}) ⇒ ${_.toNumber({})}`;

  toNumber3Lo = `
_.toNumber(undefined) ⇒ ${_.toNumber(undefined)}
_.toNumber(Infinity) ⇒ ${_.toNumber(Infinity)}
_.toNumber({}) ⇒ ${_.toNumber({})}`;

  toNumber4Lo = `
_.toFinite(undefined) ⇒ ${_.toFinite(undefined)}
_.toFinite(Infinity) ⇒ ${_.toFinite(Infinity)}
_.toFinite({}) ⇒ ${_.toFinite({})}`;
  // #endregion

  // #region toPlainObject
  toPlainObjectOrg = `
instance: any;

Foo = class {
  b = 2;
};

(this.Foo as any).prototype.c = 3;

this.instance = new this.Foo();
`;

  Foo = class {
    b = 2;
  };

  get toPlainObjectLo() {
    return `${JSON.stringify(this.instance)}`;
  }

  get toPlainObject2Lo() {
    return `_.assign({ a: 1 }, this.instance); ⇒ ${JSON.stringify(_.assign({ a: 1 }, this.instance))}`;
    // return `this.instance.c; ⇒ ${JSON.stringify(this.instance.c)}`;
  }

  get toPlainObject3Lo() {
    return `_.toPlainObject(this.instance); ⇒ ${JSON.stringify(_.toPlainObject(this.instance))}`;
  }


  get toPlainObject4Lo() {
    return `_.assign({ a: 1 }, _.toPlainObject(this.instance)); ⇒ ${JSON.stringify(_.assign({ a: 1 }, _.toPlainObject(this.instance)))}`;
  }
  // #endregion

  // #region toSafeInteger
  toSafeIntegerLo = `
_.toSafeInteger(3.2); ⇒ ${_.toSafeInteger(3.2)}`;

  toSafeInteger2Lo = `
_.toSafeInteger(Number.MIN_VALUE); ⇒ ${_.toSafeInteger(Number.MIN_VALUE)}
_.toSafeInteger(Number.MAX_VALUE); ⇒ ${_.toSafeInteger(Number.MAX_VALUE)}
_.toSafeInteger(Infinity); ⇒ ${_.toSafeInteger(Infinity)}
_.toSafeInteger(-Infinity); ⇒ ${_.toSafeInteger(-Infinity)}
_.toSafeInteger(null); ⇒ ${_.toSafeInteger(null)}
_.toSafeInteger(undefined); ⇒ ${_.toSafeInteger(undefined)}
_.toSafeInteger({}); ⇒ ${_.toSafeInteger({})}
_.toSafeInteger(9007199254740992); ⇒ ${_.toSafeInteger(9007199254740992)}`;

toSafeIntegerJs = `
9007199254740991 + 1 ⇒ ${9007199254740991 + 1} ✅
9007199254740991 + 2 ⇒ ${9007199254740991 + 2} ❌ 應該是 9007199254740993`;
  // #endregion

  // #region toString
  toStringLo = `
_.toString(3.2); ⇒ "${_.toString(3.2)}"
_.toString(null); ⇒ "${_.toString(null)}"
_.toString(undefined); ⇒ "${_.toString(undefined)}"
_.toString({}); ⇒ "${_.toString({})}"
_.toString([1, 2, 3]); ⇒ "${_.toString([1, 2, 3])}"
`;

  toStringJs = `
(3.2).toString(); ⇒ "${(3.2).toString()}"

(null+'').toString(); ⇒ "${(null+'').toString()}"
null.toString() ❌會報錯

(undefined + '').toString(); ⇒ "${(undefined + '').toString()}"
undefined.toString() ❌會報錯

({}.toString()); ⇒ "${({}.toString())}"
[1, 2, 3].toString(); ⇒ "${[1, 2, 3].toString()}"
`;
  // #endregion
}
