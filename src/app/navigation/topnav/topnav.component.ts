import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'i2z-topnav',
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent {
  currentSidebarMode = Modes.MINI;
  @Output() toggleSideNavMode: EventEmitter<Modes> = new EventEmitter<Modes>();
  constructor() {
    this.toggleSideNavMode.emit(this.currentSidebarMode);
  }

  toggleModes(){
    this.currentSidebarMode = this.currentSidebarMode==Modes.MINI ? Modes.EXPANDED : Modes.MINI;
    this.toggleSideNavMode.emit(this.currentSidebarMode);
  }

}

export enum Modes {
  EXPANDED = 'expanded',
  EXPANDABLE = 'expandable',
  MINI = 'mini',
}
