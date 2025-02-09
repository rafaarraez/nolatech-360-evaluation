import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: "Usuario registrado con éxito", user });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { token, user } = await loginUser(req.body);
        res.json({ token, user });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};
