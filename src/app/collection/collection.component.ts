import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MenuService } from '../shared/service/menu.service';
import { PrismPipe } from '../shared/pipe/prism.pipe';
import _ from 'lodash';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, PrismPipe, CardModule, DividerModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})

export class CollectionComponent implements OnInit {

  selectedMenu!: string | null;
  users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': false }
  ];
  usersStr = JSON.stringify(this.users, null, 1);

  users2 = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
  users2Str = JSON.stringify(this.users2, null, 1);

  users3 = {
    barney: { 'age': 36, 'active': false },
    fred: { 'age': 40, 'active': true },
    pebbles: { 'age': 1, 'active': false }
  };
  users3Str = JSON.stringify(this.users3, null, 1);

  array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
  ];
  arrayStr = JSON.stringify(this.array, null, 1);

  constructor(private menuServ: MenuService) { }

  ngOnInit() {
    this.menuServ.selectedMenu$.subscribe(item => this.selectedMenu = item);
    console.log(this.test());
  }

  // #region invokeMap
  invokeMapOrg = `[[5, 1, 7], [3, 2, 1]]`;
  invokeMapLo = `_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');`;
  invokeMapJs = `[[5, 1, 7], [3, 2, 1]].map(a => a.sort());`;
  invokeMap = JSON.stringify(_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));

  invokeMapOrg2 = `[123, 456]`;
  invokeMapLo2 = `_.invokeMap([123, 456], String.prototype.split, '');`;
  invokeMapJs2 = `[123, 456].map(a => String(a).split(''));`;
  invokeMap2 = JSON.stringify(_.invokeMap([123, 456], String.prototype.split, ''));

  invokeMapOrg3 = `['abc', 'def', 'ghi']`;
  invokeMapLo3 = `_.invokeMap(['abc', 'def', 'ghi'], 'toUpperCase');`;
  invokeMapJs3 = `['abc', 'def', 'ghi'].map(a => a.toUpperCase());`;
  invokeMap3 = JSON.stringify(_.invokeMap(['abc', 'def', 'ghi'], 'toUpperCase'));

  invokeMapOrg4 = `[[2, [4, 3, 2], 3, [1, 4, 3]], [3, 2, 1]]`;
  invokeMapLo4 = `_.invokeMap([[2, [4, 3, 2], 3, [1, 4, 3]], [3, 2, 1]], 'sort');`;
  invokeMapJs4 = `[[2, [4, 3, 2], 3, [1, 4, 3]], [3, 2, 1]].map(a => a.sort());`;
  invokeMap4 = JSON.stringify(_.invokeMap([[2, [4, 3, 2], 3, [1, 4, 3]], [3, 2, 1]], 'sort'));
  // #endregion

  // #region keyBy
  keyBy = JSON.stringify(_.keyBy(this.users, 'user'), null, 1);
  keyByLo = `_.keyBy(this.users, 'user');`;
  keyByJs = `
this.users.reduce((acc: { [key: string]: any }, cur) => {
  acc[cur.user] = cur;
  return acc;
}, {});`;

  keyBy2 = JSON.stringify(_.keyBy(this.array, a => String.fromCharCode(a.code)));
  keyByLo2 = `_.keyBy(this.array, a => String.fromCharCode(a.code));`;
  keyByJs2 = `
this.array.reduce((acc: { [key: string]: any }, cur) => {
  acc[String.fromCharCode(cur.code)] = cur;
  return acc;
}, {});`;
  // #endregion

  // #region map
  mapOrg = JSON.stringify([1, 2, 3, 4]);
  mapLo = `_.map([1, 2, 3, 4], this.square);`;
  mapJs = `[1, 2, 3, 4].map(this.square);`;
  map = JSON.stringify(_.map([1, 2, 3, 4], this.square));

  mapLo2 = `_.map(this.users, 'user');`;
  mapJs2 = `this.users.map(a => a.user);`;
  map2 = JSON.stringify(_.map(this.users, 'user'));

  mapOrg3 = JSON.stringify({ a: 1, b: 2, c: 3 });
  mapLo3 = `_.map({ a: 1, b: 2, c: 3 }, this.square);`;
  mapJs3 = `Object.values({ a: 1, b: 2, c: 3 }).map(this.square);`;
  map3 = JSON.stringify(_.map({ a: 1, b: 2, c: 3 }, this.square));
  // #endregion

  // #region orderBy
  orderByLo = `_.orderBy(this.users, ['user', 'age'], ['asc', 'desc']);`;
  orderByJs = `this.users.sort((a, b) => a.user.localeCompare(b.user) || b.age - a.age);`;
  orderBy = JSON.stringify(_.orderBy(this.users2, ['user', 'age'], ['asc', 'desc']), null, 1);
  // #endregion

  // #region partition
  partitionLo = `_.partition(this.users, 'active');`;
  partitionJs = `
this.users.reduce((acc: Array<typeof this.users[0]>[], cur) => {
  acc[cur.active ? 0 : 1].push(cur);
  return acc;
}, [[], []]);`;
  partition = JSON.stringify(_.partition(this.users, 'active'), null, 1);

  partitionLo2 = `_.partition(this.users, a => a.active);`;
  partition2 = JSON.stringify(_.partition(this.users, a => a.active), null, 1);

  partitionLo3 = `_.partition(users, { 'age': 1, 'active': false });`;
  partitionJs3 = `
this.users.reduce((acc: Array<typeof this.users[0]>[], cur) => {
  acc[cur.age === 1 && !cur.active ? 0 : 1].push(cur);
  return acc;
}, [[], []]);`;
  partition3 = JSON.stringify(_.partition(this.users, { 'age': 1, 'active': false }), null, 1);

  partitionLo4 = `_.partition(users, ['active', false]);`;
  partitionJs4 = `
this.users.reduce((acc: Array<typeof this.users[0]>[], cur) => {
  acc[cur.active === false ? 0 : 1].push(cur);
  return acc;
}, [[], []]);`;
  partition4 = JSON.stringify(_.partition(this.users, ['active', false]), null, 1);
  // #endregion

  // #region reduce
  reduceOrg = JSON.stringify([1, 2, 3, 4]);
  reduceLo = `_.reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);`;
  reduceJs = `[1, 2, 3, 4].reduce((sum, n) => sum + n, 0);`;
  reduce = JSON.stringify(_.reduce([1, 2, 3, 4], (sum, n) => sum + n, 0));

  reduceOrg2 = JSON.stringify({ 'a': 1, 'b': 2, 'c': 1 });
  reduceLo2 = `
_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result: { [key: number]: string[] }, value, key) => {
  (result[value] || (result[value] = [])).push(key)
  return result;
}, {})`;
  reduceJs2 = `
Object.entries({ a: 1, b: 2, c: 1 }).reduce((result: { [key: number]: string[] }, [key, value]) => {
  (result[value] || (result[value] = [])).push(key)
  return result;
}, {});`;
  reduce2 = JSON.stringify(_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result: { [key: number]: string[] }, value, key) => {
    (result[value] || (result[value] = [])).push(key)
    return result;
  }, {}));
  // #endregion


  // #region reduceRight
  reduceRightOrg = JSON.stringify({ 'a': 1, 'b': 2, 'c': 1 });
  reduceRightLo = `
_.reduceRight({ 'a': 1, 'b': 2, 'c': 1 }, (result: { [key: number]: string[] }, value, key) => {
  (result[value] || (result[value] = [])).push(key)
  return result;
}, {})`;
  reduceRightJs = `
Object.entries({ a: 1, b: 2, c: 1 }).reduceRight((result: { [key: number]: string[] }, [key, value]) => {
  (result[value] || (result[value] = [])).push(key)
  return result;
}, {});`;
  reduceRight = JSON.stringify(_.reduceRight({ 'a': 1, 'b': 2, 'c': 1 }, (result: { [key: number]: string[] }, value, key) => {
    (result[value] || (result[value] = [])).push(key)
    return result;
  }, {}));
  // #endregion

  // #region reject
  rejectLo = `_.reject(this.users, a => !a.active);`;
  rejectJs = `this.users.filter(a => a.active);`;
  reject = JSON.stringify(_.reject(this.users, a => !a.active), null, 1);

  rejectLo2 = `_.reject(this.users, { 'age': 36, 'active': false });`;
  rejectJs2 = `
this.users.filter(a => !(a.age === 36 && !a.active));`;
  reject2 = JSON.stringify(_.reject(this.users, { 'age': 36, 'active': false }), null, 1);

  rejectLo3 = `_.reject(this.users, ['active', false]);`;
  filterLo = `_.filter(this.users, ['active', false]);`;
  reject3 = JSON.stringify(_.reject(this.users, ['active', false]), null, 1);
  filter = JSON.stringify(_.filter(this.users, ['active', false]), null, 1);
  // #endregion

  // #region sample
  sampleOrg = JSON.stringify([1, 2, 3, 4]);
  sampleLo = `_.sample([1, 2, 3, 4]);`;
  sampleJs = `[1, 2, 3, 4][Math.floor(Math.random() * 4)];`;
  sample = JSON.stringify(_.sample([1, 2, 3, 4]));

  sampleLo2 = `_.sample(this.users);`;
  sampleJs2 = `Object.entries(this.users)[Math.floor(Math.random() * Object.keys(this.users3).length)][1];`;
  sample2 = JSON.stringify(_.sample(this.users3));
  // #endregion

  // #region sampleSize
  sampleSizeOrg = JSON.stringify([1, 2, 3, 4]);
  sampleSizeLo = `_.sampleSize([1, 2, 3, 4], 2);`;
  sampleSizeJs = `let selected = [];
let arr = [1, 2, 3, 4];
for (let i = 0; i < 2; i++) {
  const index = Math.floor(Math.random() * arr.length);
  selected.push(arr[index]);
  arr.splice(index, 1);
}
return selected;`;
  sampleSize = JSON.stringify(_.sampleSize([1, 2, 3, 4], 2));
  // #endregion

  // #region shuffle
  shuffleOrg = JSON.stringify([1, 2, 3, 4]);
  shuffleLo = `_.shuffle([1, 2, 3, 4]);`;
  shuffleJs = `let arr = [1, 2, 3, 4];
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;`;
  shuffle = JSON.stringify(_.shuffle([1, 2, 3, 4]));
  // #endregion

  // #region size
  sizeOrg = JSON.stringify([1, 2, 3, 4]);
  sizeLo = `_.size([1, 2, 3, 4]);`;
  sizeJs = `[1, 2, 3, 4].length;`;
  size = JSON.stringify(_.size([1, 2, 3, 4]));

  sizeLo2 = `_.size(this.users);`;
  sizeJs2 = `Object.keys(this.users3).length;`;
  size2 = JSON.stringify(_.size(this.users3));

  sizeOrg3 = "pebbles";
  sizeLo3 = `_.size("pebbles");`;
  sizeJs3 = `"pebbles".length;`;
  size3 = JSON.stringify(_.size("pebbles"));
  // #endregion

  // #region some
  someLo = `_.some(this.users, ['age',1]]);`;
  someJs = `this.users.some(a => a.age == 1);`;
  some = JSON.stringify(_.some(this.users, ['age', 1]));

  someLo2 = "_.some(this.users, 'barney');";
  some2 = JSON.stringify(_.some(this.users3, 'barney'));
  // #endregion

  // #region sortBy
  sortByLo = `_.sortBy(this.users, ['user', 'age']);`;
  sortByJs = `this.users2.sort((a, b) => a.user.localeCompare(b.user) || a.age - b.age);`;
  sortBy = JSON.stringify(_.sortBy(this.users2, ['user', 'age']), null, 1);
  // #endregion

  // function
  square(n: number): number {
    return n * n;
  }

  test() {
    return this.users2.sort((a, b) => a.user.localeCompare(b.user) || a.age - b.age);
  }
}

function squareFn(n: number): number {
  return n * n;
}
