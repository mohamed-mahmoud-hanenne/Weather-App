import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]'
})
export class BackGroundColorDirective implements OnInit{
@Input('appBackGroundColor') temperture : number = 0;
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    this.setBackground()
  }

  private setBackground(){
    if(this.temperture <10){
      this.el.nativeElement.style.backgroundColor = 'blue';
    }

    else  if(this.temperture >= 10 && this.temperture <=25){
      this.el.nativeElement.style.backgroundColor = 'green';
    }

    else{
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }

}
