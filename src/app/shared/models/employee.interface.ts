import { Department } from "./department.enum";
import { Status } from "./status.enum";
import { IEquipment } from "./equipment.interface";

export interface IEmployee {
    id: string;
    name: string;
    department: Department.ENGINEERING | Department.MARKETING | Department.SALES;
    status: Status.ACTIVE | Status.OFFBOARDED;
    email: string;
    equipments: IEquipment[]
}

