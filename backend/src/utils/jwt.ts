import jwt from "jsonwebtoken";

export const generateToken = (userId: string, role: string, name: string, email: string): string => {
    return jwt.sign({ userId, name, email, role }, process.env.JWT_SECRET as string, {
        expiresIn: "7d",
    });
};
