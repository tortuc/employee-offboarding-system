import { Department } from "../models/department.enum";
import { IEmployee } from "../models/employee.interface";
import { Status } from "../models/status.enum";

export const employeesData: IEmployee[] = [
    {
      id: '1001',
      name: 'John Doe',
      department: Department.ENGINEERING,
      status: Status.ACTIVE,
      email: 'john.d@company.com',
      equipments: [
           {
             id:'2001',
             name: 'Macbook air'
           },
           { 
             id:'2002',
             name: 'Magic Mouse'
           }
      ]
    },
    {
      id:'1002',
      name:'Jane Smith',
      department: Department.MARKETING,
      status: Status.ACTIVE,
      email:'jane.s@company.com',
      equipments:[
           { 
             id:'2003',
             name: 'Dell XPS'
           },
           { 
             id:'2004',
             name: 'Logitech Mouse'
           }
      ]
    },
    {
      id:'1003',
      name:'Mike Johnson',
      department: Department.SALES,
      status: Status.OFFBOARDED,
      email:'mike.j@company.com',
      equipments:[
           { 
             id:'2005',
             name: 'Lenovo ThinkPad'
           }
      ]
    },
    {
      id:'1004',
      name:'Sarah Williams',
      department: Department.ENGINEERING,
      status: Status.ACTIVE,
      email:'sarah.w@company.com',
      equipments:[
           { 
             id:'2006',
             name: 'Macbook Pro'
           },
           { 
             id:'2007',
             name: 'Apple Keyboard'
           }
      ]
    },
    {
      id:'1005',
      name:'David Brown',
      department: Department.ENGINEERING,
      status: Status.ACTIVE,
      email:'david.b@company.com',
      equipments:[
           { 
             id:'2008',
             name: 'HP EliteBook'
           },
           { 
             id:'2009',
             name: 'Dell Monitor'
           }
      ]
    },
    {
      id:'1006',
      name:'Emily Chen',
      department: Department.MARKETING,
      status: Status.ACTIVE,
      email:'emily.c@company.com',
      equipments:[
           { 
             id:'2010',
             name: 'Macbook Pro M1'
           },
           { 
             id:'2011',
             name: 'External Monitor'
           }
      ]
    },
    {
      id:'1007',
      name:'Robert Wilson',
      department: Department.SALES,
      status: Status.ACTIVE,
      email:'robert.w@company.com',
      equipments:[
           { 
             id:'2012',
             name: 'Surface Laptop'
           },
           { 
             id:'2013',
             name: 'Microsoft Mouse'
           }
      ]
    },
    {
      id:'1008',
      name:'Lisa Anderson',
      department: Department.MARKETING,
      status: Status.OFFBOARDED,
      email:'lisa.a@company.com',
      equipments:[
           { 
             id:'2014',
             name: 'Dell Latitude'
           }
      ]
    },
    {
      id:'1009',
      name:'James Martinez',
      department: Department.ENGINEERING,
      status: Status.ACTIVE,
      email:'james.m@company.com',
      equipments:[
           { 
             id:'2015',
             name: 'Macbook Pro M2'
           },
           { 
             id:'2016',
             name: 'Magic Keyboard'
           }
      ]
    },
    {
      id:'1010',
      name:'Sophia Kim',
      department: Department.MARKETING,
      status: Status.ACTIVE,
      email:'sophia.k@company.com',
      equipments:[
           { 
             id:'2017',
             name: 'Macbook Air M2'
           },
           { 
             id:'2018',
             name: 'External SSD'
           }
      ]
    },
    {
      id:'1011',
      name:'Alex Turner',
      department: Department.SALES,
      status: Status.ACTIVE,
      email:'alex.t@company.com',
      equipments:[
           { 
             id:'2019',
             name: 'ThinkPad X1'
           },
           { 
             id:'2009',
             name: 'Dell Monitor'
           }
      ]
    },
    {
      id:'1012',
      name:'Emma Davis',
      department: Department.ENGINEERING,
      status: Status.OFFBOARDED,
      email:'emma.d@company.com',
      equipments:[
           { 
             id:'2006',
             name: 'Macbook Pro'
           }
      ]
    },
    {
      id:'1013',
      name:'Michael Lee',
      department: Department.MARKETING,
      status: Status.ACTIVE,
      email:'michael.l@company.com',
      equipments:[
           { 
             id:'2020',
             name: 'Surface Pro'
           },
           { 
             id:'2021',
             name: 'Surface Pen'
           }
      ]
    },
    {
      id:'1014',
      name:'Olivia White',
      department: Department.SALES,
      status: Status.ACTIVE,
      email:'olivia.w@company.com',
      equipments:[
           { 
             id:'2001',
             name: 'Macbook Air'
           },
           { 
             id:'2022',
             name: 'Magic Trackpad'
           }
      ]
    },
    {
      id:'1015',
      name:'Daniel Clark',
      department: Department.ENGINEERING,
      status: Status.ACTIVE,
      email:'daniel.c@company.com',
      equipments:[
           { 
             id:'2023',
             name: 'Dell XPS 15'
           },
           { 
             id:'2024',
             name: 'Dual Monitors'
           }
      ]
    },
    {
      id:'1016',
      name:'Rachel Green',
      department: Department.MARKETING,
      status: Status.ACTIVE,
      email:'rachel.g@company.com',
      equipments:[
           { 
             id:'2025',
             name: 'Macbook Pro 16'
           },
           { 
             id:'2002',
             name: 'Magic Mouse'
           }
      ]
    },
    {
      id:'1017',
      name:'Thomas Anderson',
      department: Department.ENGINEERING,
      status: Status.OFFBOARDED,
      email:'thomas.a@company.com',
      equipments:[
           { 
             id:'2026',
             name: 'ThinkPad P1'
           }
      ]
    },
    {
      id:'1018',
      name:'Maria Garcia',
      department: Department.SALES,
      status: Status.ACTIVE,
      email:'maria.g@company.com',
      equipments:[
           { 
             id:'2027',
             name: 'Surface Laptop 4'
           },
           { 
             id:'2028',
             name: 'Surface Dock'
           }
      ]
    },
    {
      id:'1019',
      name:'William Taylor',
      department: Department.ENGINEERING,
      status: Status.ACTIVE,
      email:'william.t@company.com',
      equipments:[
           { 
             id:'2029',
             name: 'Macbook Pro M3'
           },
           { 
             id:'2030',
             name: 'Studio Display'
           }
      ]
    },
    {
      id:'1020',
      name:'Sophie Martin',
      department: Department.MARKETING,
      status: Status.OFFBOARDED,
      email:'sophie.m@company.com',
      equipments:[
           { 
             id:'2031',
             name: 'Dell XPS 13'
           }
      ]
    }
];
    