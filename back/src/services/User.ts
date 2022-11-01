import { PrismaClient } from "@prisma/client";

interface UserData {
    name: string;
    role: string;
}

const prisma = new PrismaClient();

export const addUser = async (userData: UserData) => {
    const { name, role } = userData;

    const user = await prisma.user.create({
        data: {
            name,
            role,
        },
    });

    await prisma.$disconnect();

    return user;
};

export const getAllUser = async () => {
    const users = await prisma.user.findMany();

    prisma.$disconnect();

    return users;
};
