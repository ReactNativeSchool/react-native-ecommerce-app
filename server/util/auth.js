import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import prisma from './prisma';

export const hashPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const generateJWT = async userId => {
  const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET);

  return token;
};

export const comparePassword = async (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};

export const decodeJWT = async (authHeader = '') => {
  const [, token] = authHeader.split('Bearer ');
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
};

export const getUserFromHeader = async req => {
  try {
    const decoded = await decodeJWT(req?.headers?.authorization);

    if (decoded && decoded.id) {
      const user = await prisma.user.findFirst({
        where: {
          id: decoded.id,
        },
      });

      return user;
    }

    return null;
  } catch {
    return null;
  }
};
