import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinFields'
})
export class JoinFieldsPipe implements PipeTransform {

  transform(value: any[], field: string = 'name', separator: string = ','): string {
    if (!Array.isArray(value) || !field) return '';
    return value.map(item => item?.[field]).join(`${separator} `);
  }

}
