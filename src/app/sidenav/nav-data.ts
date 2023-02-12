import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
 
    // {
    //     routeLink: 'products',
    //     icon: 'fal fa-plug',
    //     label: 'Devices',
    //     items: [
    //         {
    //             routeLink: 'products/level1.1',
    //             label: 'Songkhla',
    //             items: [
    //                 {
    //                     routeLink: 'products/level2.1',
    //                     label: 'PSU',
    //                 },
    //                 {
    //                     routeLink: 'products/level2.2',
    //                     label: 'RUTS',
    //                     items: [
    //                         {
    //                             routeLink: 'products/level3.1',
    //                             label: 'Building 62'
    //                         },
    //                         {
    //                             routeLink: 'products/level3.2',
    //                             label: 'Building 50'
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Bangkok',
    //         }
    //     ]
    // },
    {
        routeLink: 'devices',
        icon: 'fal fa-plug',
        label: 'Devices'
    },
    // {
    //     routeLink: 'coupens',
    //     icon: 'fal fa-tags',
    //     label: 'Coupens',
    //     items: [
    //         {
    //             routeLink: 'coupens/list',
    //             label: 'List Coupens'
    //         },
    //         {
    //             routeLink: 'coupens/create',
    //             label: 'Create Coupens'
    //         }
    //     ]
    // },
    {
        routeLink: 'about-us',
        icon: 'fal fa-handshake',
        label: 'About us'
    },
    
    // {
    //     routeLink: 'media',
    //     icon: 'fal fa-group',
    //     label: 'About us'
    // },
    {
        routeLink: 'profile',
        icon: 'fal fa-user',
        label: 'Profile',
        // expanded: true,
        // items: [
        //     {
        //         routeLink: 'settings/profile',
        //         label: 'Profile',
        //         icon: 'fa-user-o',
        //     },
        //     {
        //         routeLink: 'settings/customize',
        //         label: 'Customize'
        //     }
        // ]
    },
    
    {
        routeLink: 'logout',
        icon: 'fal  fa-sign-out',
        label: 'Log out'
    },
];
