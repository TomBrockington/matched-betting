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
      category: `GENERAL`,
      ownerName: createdUser.username
    }
  })

  const userPostTwo = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My second post',
      content: `Will it work?`,
      category: `GENERAL`,
      ownerName: createdUser.username

    }
  })

  const userPostThree = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My 3rd post',
      content: `3 is the magic number`,
      category: `EVENTS`,
      ownerName: createdUser.username

    }
  })

  const userPostFour = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My 4TH post',
      content: `SQUARE ROOT OF WHATEVER`,
      category: `EVENTS`,
      ownerName: createdUser.username

    }
  })

  const userPostFive = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My V Post',
      content: `Romans get it`,
      category: `NEWBIES`,
      ownerName: createdUser.username

    }
  })

  const userPostSix = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: '666',
      content: `Ahh the devil is here`,
      category: `NEWBIES`,
      ownerName: createdUser.username

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
