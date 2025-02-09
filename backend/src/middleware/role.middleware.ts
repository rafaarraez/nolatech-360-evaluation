import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const authorizeRoles = (roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(403).json({ message: "No autorizado" });
            return;
        }

        if (!roles.includes(req.user.role)) {
            res.status(403).json({ message: "No tienes permisos para acceder a esta ruta" });
            return;
        }

        next(); // ✅ Siempre llamamos a next() si el usuario tiene el rol adecuado
    };
};
