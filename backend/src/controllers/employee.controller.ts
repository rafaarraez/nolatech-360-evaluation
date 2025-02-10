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

export const getEmployeeStats = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const employeeStats = await EmployeeService.getEmployeeStats(id);

        if (!employeeStats) {
            res.status(404).json({ message: "Empleado no encontrado" });
        }

        res.json(employeeStats);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
