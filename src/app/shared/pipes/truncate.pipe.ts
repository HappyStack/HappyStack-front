import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, trail: string): any {
    
    if (!value) return value;

    let _limit = limit ? limit : 10;
    let _trail = trail ? trail : '...';

    if (value.length > _limit) {
      return value.substring(0, _limit) + _trail
    }

    return value;
  }
}