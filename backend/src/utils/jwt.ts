import jwt from "jsonwebtoken";

export const generateToken = (userId: string, role: string, username: string, email: string): string => {
    return jwt.sign({ userId, username, email, role }, process.env.JWT_SECRET as string, {
        expiresIn: "7d",
    });
};
