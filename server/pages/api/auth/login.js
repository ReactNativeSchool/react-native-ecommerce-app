import { PrismaClient } from '@prisma/client';

import { comparePassword, generateJWT } from '../../../util/auth';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req?.body || {};

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('No user found.');
    }

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid password.');
    }

    // return JWT
    const token = await generateJWT(user.id);

    return res.status(200).json({
      token,
      userId: user.id,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.message || 'Something went wrong.' });
  }
};
