import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';
import { userService } from '../services'


export const authController = {
    create: async (req: Request, res: Response) => {

        try {

            const u = await userService.post(req.body);
            return res.status(200).json({ message: 'User added successfully' });
        }
        catch (error: any) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    signin: async (req: Request, res: Response) => {

        try {

            const { user_name, password } = req.body;
            console.log(user_name,password);
            const u = await userService.get(user_name);
            console.log('user',u)
            if (u == null) {
                return res.status(400).json({ message: "email o password incorrect" });
            }
            if (u.password != password) {
                return res.status(400).json({ message: "Invalid password" });
            }
            // generate token

            const token: string = jwt.sign({ _id: user_name }, TOKEN_SECRET || 'token_test', { expiresIn: 60 * 60 * 24 });

            res.json({ token });
        }
        catch (error: any) {
            res.status(400).json({
                message: error.message
            })
        }

    }
}
