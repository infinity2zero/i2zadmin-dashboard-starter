import { Component } from '@angular/core';
// import { Modes as SidebarModes } from ';
@Component({
  selector: 'i2z-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'i2zadmin-dashboard-starter';
  sidebarExpanded = true;
  currentSidebarMode: any ='mini';
  mainNavigationOpened = true;
  menu = [
    {
      id: 'DOCUMENTATION',
      header: 'DOCUMENTATION',
    },
    {
      id: 'GET_STARTED',
      label: 'GET_STARTED',
      route: '/',
      iconClasses: 'bi bi-house',
    },
    {
      id: 'CONFIGURATION',
      label: 'CONFIGURATION',
      route: '/configuration',
      iconClasses: 'bi bi-gear',
    },
    {
      id: 'MENU_DEFINITION',
      label: 'Menu Definition',
      route: '/menu-definition',
      iconClasses: 'bi bi-box',
    },
    {
      id: 'DEMO',
      header: 'DEMO',
    },
    {
      id: 'MULTILEVEL',
      label: 'Pages',
      iconClasses: 'bi bi-file',
      //roles: [],
      children: [
        {
          id: 'LEVEL_ONE-2',
          label: 'LEVEL_ONE',
          children: [
            {
              id: 'LEVEL_TWO-1',
              label: 'LEVEL_TWO',
              children: [
                {
                  id: 'LEVEL_THREE-1-1',
                  label: 'LEVEL_THREE',
                  route: '/level-three-1',
                },
                {
                  id: 'LEVEL_THREE-1-2',
                  label: 'LEVEL_THREE',
                  route: '/level-three-2',
                },
                {
                  id: 'LEVEL_THREE-1-3',
                  label: 'LEVEL_THREE',
                  route: '/level-three-3',
                },
              ],
            },
            {
              id: 'LEVEL_TWO-2',
              label: 'LEVEL_TWO',
              children: [
                {
                  id: 'LEVEL_THREE-2-1',
                  label: 'LEVEL_THREE',
                  route: '/level-three-2-1',
                },
                {
                  id: 'LEVEL_THREE-2-2',
                  label: 'LEVEL_THREE',
                  route: '/level-three-2-2',
                },
                {
                  id: 'LEVEL_THREE-2-3',
                  label: 'LEVEL_THREE',
                  route: '/level-three-2-3',
                },
              ],
            },
            {
              id: 'LEVEL_TWO-3',
              label: 'LEVEL_TWO',
              route: '/level-two-1',
            },
            {
              id: 'LEVEL_TWO-4',
              label: 'LEVEL_TWO',
              route: '/level-two-2',
            },
          ],
        },
        {
          id: 'LEVEL_ONE-3',
          header: 'LEVEL_ONE_HEADER',
        },
        {
          id: 'LEVEL_ONE-4',
          label: 'LEVEL_ONE',
          route: '/level-one-2',
        },
      ],
    },
    
    {
      id: 'ADMIN',
      label: 'ADMIN',
      iconClasses: 'bi bi-person-plus',
      route: 'admin',
      badges: [
        {
          label: 'admin',
          classes: 'badge--red',
        },
      ],
    },
    {
      id: 'ROLES',
      label: 'ROLES',
      iconClasses: 'bi bi-lock',
      children: [
        {
          id: 'ROLES-ADMIN_AND_EDITOR',
          label: 'ADMIN_AND_EDITOR',
          route: '/roles/admin-editor',
          //roles: [Roles.ADMIN, Roles.EDITOR],
        },
        {
          id: 'ROLES-ADMIN',
          label: 'ADMIN',
          route: '/roles/admin',
          //roles: [Roles.ADMIN],
        },
        {
          id: 'ROLES-EDITOR',
          label: 'EDITOR',
          route: '/roles/editor',
          //roles: [Roles.EDITOR],
        },
      ],
    },
    {
      id: 'CHILD_ROUTES',
      label: 'Child Routes',
      iconClasses: 'bi bi-diagram-3',
      route: 'child-routes',
      linkActiveExact: false,
    },
    {
      id: 'BADGES',
      label: 'Badges',
      iconClasses: 'bi bi-star',
      route: 'badges',
      badges: [
        {
          label: 'new',
          classes: 'badge--red',
        },
        {
          label: '1',
          classes: 'badge--blue',
        },
      ],
    },
  ];

  
  
}



