import Employee, { IEmployee } from "../models/employee.model";

export const getAllEmployees = async (): Promise<IEmployee[]> => {
    return await Employee.find().populate("manager", "name");
};

export const createEmployee = async (data: IEmployee) => {
    return await Employee.create(data);
};

