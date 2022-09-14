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
    path: '/vendormanagement/vendormanagement',
    title: 'Vendor-Management',
    icon: 'person_outline',
    class: '',
    type: "dropdown",
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.MARKETING_AGENT,
      RoleEnum.EXECUTIVE

    ]
  },

  {
    path: '/vendor-new-registration/vendor-new-registration',
    title: 'Vendor-new-registration',
    icon: 'person_outline',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.MARKETING_AGENT,
      RoleEnum.EXECUTIVE

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
    path: '/customermanagement/customermanagement',
    title: 'Customer-Management',
    icon: 'groups',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.CUSTOMER
    ]
  },
  
  {
    path: '/ordersmanagement/ordersmanagement',
    title: 'Orders-Management',
    icon: 'workspaces',
    class: '',
    roles: [
      RoleEnum.ADMIN,
    ]
  },
];



