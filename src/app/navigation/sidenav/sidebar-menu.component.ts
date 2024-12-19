import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Menu, Modes, UnAuthorizedVisibility } from './sidebar-menu.interface';

import { AnchorService } from './internal/anchor.service';
import { NodeService } from './internal/node.service';
import { RoleService, Role } from './internal/role.service';
import { SearchService } from './internal/search.service';
import { trackByItem } from './internal/utils';

@Component({
  selector: 'i2z-sidenav-menu',
  styleUrls: ['sidebar-menu.component.scss'],
  providers: [NodeService, AnchorService, RoleService, SearchService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="i2z-sidenav" [ngClass]="'i2z-sidenav--mode-' + mode" [@.disabled]="disableAnimations">
    <ng-content></ng-content>
    <ul class="i2z-sidenav__node">
      <ng-container *ngFor="let item of menu; trackBy: trackByItem">
        <li
          i2z-sidenav-item
          class="i2z-sidenav-item i2z-sidenav-item--root"
          *ngIf="roleService.showItem$(item.roles) | async"
          [menuItem]="item"
          [level]="0"
        ></li>
      </ng-container>
    </ul>
  </div>`,
})
export class SidebarMenuComponent {
  @Input('menu') set _menu(menu: Menu) {
    this.disableAnimations = true;
    this.menu = menu;

    setTimeout(() => {
      this.disableAnimations = false;
    });
  }
  @Input() set iconClasses(cssClasses: string) {
    this.anchorService.iconClasses = cssClasses;
  }
  @Input() set toggleIconClasses(cssClasses: string) {
    this.nodeService.toggleIconClasses = cssClasses;
  }
  @Input() set role(role: Role ) {
    this.roleService.role = role;
  }
  @Input() set unAuthorizedVisibility(visibility: UnAuthorizedVisibility) {
    this.roleService.unAuthorizedVisibility = visibility;
  }
  @Input() set search(value: string ) {
    this.searchService.search = value;
  }
  @Input() mode = Modes.EXPANDED;

  menu?: Menu;
  modes = Modes;
  disableAnimations = true;
  trackByItem = trackByItem;

  constructor(
    private anchorService: AnchorService,
    private nodeService: NodeService,
    private searchService: SearchService,
    public roleService: RoleService
  ) {}
}
