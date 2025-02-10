import Employee, { IEmployee } from "../models/employee.model";

export const getAllEmployees = async (): Promise<IEmployee[]> => {
    return await Employee.find();
};

export const createEmployee = async (data: IEmployee) => {
    return await Employee.create(data);
};

export const getEmployeeStats = async (id: string) => {
    const employee = await Employee.findById(id).populate("evaluations");

    if (!employee) {
        return null;
    }
    const employeeStats = await employee.calculateEvaluationStats()
    return { employee, employeeStats };
}
