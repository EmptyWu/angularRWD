import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'mrpt015a'
})
export class mrpt015aPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url: any): any {
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}