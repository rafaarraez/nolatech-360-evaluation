import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export interface AuthRequest extends Request {
    user?: { id: string; role: string };
}

export const verifyToken = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Acceso denegado, token no proporcionado" });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string; role: string };

        req.user = { id: decoded.userId, role: decoded.role };

        next(); // ✅ Siempre llamamos a next() si todo está bien
    } catch (error) {
        res.status(403).json({ message: "Token inválido" });
    }
};
