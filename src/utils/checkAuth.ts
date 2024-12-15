import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

export const checkAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET as string);

      req.login = decoded.login;

      next();
    } catch (error) {
      res.status(403).json({
        message: 'Нет доступа',
      });
    }
  } else {
    res.status(403).json({
      message: 'Нет доступа',
    });
  }
};
