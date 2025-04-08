import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe',
  standalone: false
})
export class ReversepipePipe implements PipeTransform {

  transform(input: string): any {
    var data = ""
    for(var i=input.length-1;i>=0;i--)
    {
      data += input[i]
    }
    return data;
  }

}
