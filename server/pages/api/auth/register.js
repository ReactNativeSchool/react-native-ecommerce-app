import { PrismaClient } from '@prisma/client';

import { hashPassword, generateJWT } from '../../../util/auth';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // hash password
    const user = req?.body || {};
    user.password = await hashPassword(user.password);

    // save to db
    const createdUser = await prisma.user.create({ data: user });

    // return JWT
    const token = await generateJWT(createdUser.id);

    return res.status(200).json({
      token,
      userId: createdUser.id,
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(200).json({ message: 'Account already exists.' });
    }

    console.log(error);
    return res.status(400).json({ message: 'Something went wrong.' });
  }
};
