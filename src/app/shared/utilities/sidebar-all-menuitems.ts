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
      RoleEnum.ADMIN,
      RoleEnum.MARKETING_AGENT,
      RoleEnum.EXECUTIVE,
      RoleEnum.CUSTOMER,
      RoleEnum.GUEST
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
      RoleEnum.EXECUTIVE,
      RoleEnum.GUEST,

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
      RoleEnum.EXECUTIVE,
      RoleEnum.GUEST,
    ],
    children: [
      {
        path: '/vendor-new-registration/vendor-new-registration',
        title: 'Vendor-new-registration',
        icon: 'person_outline',
        class: '',
        roles: [
          RoleEnum.ADMIN,
          RoleEnum.MARKETING_AGENT,
          RoleEnum.EXECUTIVE,
          RoleEnum.GUEST,

        ]
      },
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
      RoleEnum.EXECUTIVE,
      RoleEnum.GUEST,

    ]
  },

  {
    path: '/vendor-mechanic-management/vendor-mechanic-management',
    title: 'Vendor-Mechanic-Managemnet',
    icon: 'person_outline',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.EXECUTIVE,
      RoleEnum.GUEST,
    ]
  },

  {
    path: '/executive/executive',
    title: 'Executive',
    icon: 'person_outline',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.EXECUTIVE,
      RoleEnum.GUEST
    ]
  },

  {
    path: '/customermanagement/customermanagement',
    title: 'Customer-Management',
    icon: 'groups',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      RoleEnum.CUSTOMER,
      // RoleEnum.GUEST
    ]
  },
  
  {
    path: '/ordersmanagement/ordersmanagement',
    title: 'Orders-Management',
    icon: 'workspaces',
    class: '',
    roles: [
      RoleEnum.ADMIN,
      // RoleEnum.MARKETING_AGENT,
      //  RoleEnum.EXECUTIVE,
      // RoleEnum.CUSTOMER,
      // RoleEnum.GUEST
    ]
  },
];



