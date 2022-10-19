const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const createdUser = await prisma.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
    },
  });

  const userPostOne = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My first post',
      content: `Ahh so much to say and so little time`,
      category: `GENERAL`
    }
  })

  const createdUserTwo = await prisma.user.create({
    data: {
      email: 'atanzarian@email.com',
      password,
    },
  });


  console.log(
    'users',
    createdUser,
    userPostOne,
    createdUserTwo
  );
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
