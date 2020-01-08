import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem: ElementRef) { }

  private textDeco(action:string){
  	this.elem.nativeElement.style.textDecoration=action;
  	this.elem.nativeElement.style.userSelect="none";
  }

  @HostListener("click") onClick(){
  	this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClick(){
  	this.textDeco("None")
  }
}
