import bcrypt from "bcryptjs";
import User from "../models/user.model";
import { generateToken } from "../utils/jwt";

export const registerUser = async (data: { name: string; email: string; password: string; role: string }) => {
    const { name, email, password, role } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("El usuario ya existe");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    return { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
};

export const loginUser = async (data: { email: string; password: string }) => {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) throw new Error("Usuario no encontrado");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Credenciales incorrectas");

    const token = generateToken(user.id, user.role, user.name, user.email);
    return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
};
