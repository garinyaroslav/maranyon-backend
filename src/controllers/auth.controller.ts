import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  public static async login(req: Request, res: Response) {
    try {
      const { login, password } = req.body;

      let passHash: null | string = null;
      const admins = await AuthService.getAll();

      for (const admin of admins) {
        if (admin.login === login) {
          passHash = admin.passHash;
        }
      }

      if (passHash === null) {
        res.status(400).json({
          message: 'access denied',
        });
        return;
      }

      const isValidPass = await bcrypt.compare(password, passHash as string);

      if (isValidPass) {
        res.status(200).json({
          message: 'OK',
        });
      } else {
        res.status(400).json({
          message: 'access denied',
        });
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
