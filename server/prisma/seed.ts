import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.users.createMany({
        data: [
            {
                username: "dragonKing",
                email: "dragon@example.com",
                hashed_password: "hashed123",
                coins: 150.5,
            },
            {
                username: "heroBoy",
                email: "hero@example.com",
                hashed_password: "hashed456",
                coins: 82.3,
            },
            {
                username: "handsomeTeen",
                email: "teen@example.com",
                hashed_password: "ultraHashed789",
                coins: 9999.99,
            }
        ]
    });
}

main()
    .then(() => {
        console.log("Seeding complete!");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
