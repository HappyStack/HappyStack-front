import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'htmlToPlainText'})
export class HtmlToPlainTextPipe implements PipeTransform {

  constructor() {}

  transform(encodedStr: string): any {
    const parser = new DOMParser
    const dom = parser.parseFromString(
      '<!doctype html><body>' + encodedStr,
      'text/html')
    return dom.body.textContent
  }
}
