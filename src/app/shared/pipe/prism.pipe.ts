import { Pipe, PipeTransform } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Pipe({
  name: 'prism',
  standalone: true
})
export class PrismPipe implements PipeTransform {

  transform(value: string, language: string): string {
    if (!value) return '';

    // 用中括號存取語言
    const grammar = Prism.languages[language];
    if (!grammar) {
      console.warn(`Prism 語言模組不存在: ${language}`);
      return value;
    }

    return Prism.highlight(value, grammar, language);
  }

}
