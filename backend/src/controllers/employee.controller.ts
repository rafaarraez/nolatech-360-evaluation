import { Request, Response } from "express";
import * as EmployeeService from "../services/employee.service";

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await EmployeeService.getAllEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados" });
    }
};

export const createEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await EmployeeService.createEmployee(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: "Error al crear empleado" });
    }
};
