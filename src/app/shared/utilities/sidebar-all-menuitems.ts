import { RoleEnum } from "./role.enum";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  roles: string[];
  type?: string;
  children?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'dashboard',
    class: '',
    roles: [
      RoleEnum.ADMIN
    ]
  },
  {
    path: '/staffmanagement/staffmanagement',
    title: 'Staff-Management',
    icon: 'person_outline',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.MARKETING_AGENT,
      RoleEnum.EXECUTIVE

    ]
  },


  {
    path: '/Vendor-Management',
    title: 'Vendor-Management',
    icon: 'person_outline',
    class: '',
    type: "dropdown",
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.MARKETING_AGENT,
      RoleEnum.EXECUTIVE
    ],
    children: [
      {
        path: '/vendormanagement/vendormanagement',
        title: 'Vendor-List',
        icon: 'person_outline',
        class: '',
        roles: [
          RoleEnum.ADMIN,
          RoleEnum.MARKETING_AGENT,
          RoleEnum.EXECUTIVE
        ]
      },
      {
        path: '/vendor-new-registration/vendor-new-registration',
        title: 'Vendor-Initial-Request',
        icon: 'person_outline',
        class: '',
        roles: [
          RoleEnum.ADMIN,
          RoleEnum.MARKETING_AGENT,
          RoleEnum.EXECUTIVE
    
        ]
      },
    ]
  },

  

  {
    path: '/vendor-mechanic-management/vendor-mechanic-management',
    title: 'Vendor-Mechanic-Managemnet',
    icon: 'person_outline',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.EXECUTIVE
    ]
  },

  {
    path: 'Customer-Management',
    title: 'Customer-Management',
    icon: 'groups',
    class: '',
    type:'dropdown',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.CUSTOMER
    ],
    children: [
      {
        path: '/customermanagement/customermanagement',
        title: 'Customer-List',
        icon: 'workspaces',
        class: '',
        roles: [
          RoleEnum.ADMIN,
          RoleEnum.MARKETING_AGENT,
          RoleEnum.EXECUTIVE
        ]
      }
    ]
  },
  
  {
    path: 'Orders-Management',
    title: 'Orders-Management',
    icon: 'workspaces',
    class: '',
    type: "dropdown",
    roles: [
      RoleEnum.ADMIN,
    ],
    children: [
      {
        path: '/ordersmanagement/ordersmanagement',
        title: 'Orders-List',
        icon: 'workspaces',
        class: '',
        roles: [
          RoleEnum.ADMIN,
          RoleEnum.MARKETING_AGENT,
          RoleEnum.EXECUTIVE
        ]
      }
    ]
  },

];



