import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function (req: NextApiRequest, res: NextApiResponse) {

	try {
		const { name, email, password } = req.body;

		const existingUser = await prismadb.user.findUnique({ where: { email } });

		if (existingUser) {
			return res.status(422).json({ error: 'User already exist' });
		}

		const hashedPassword = await bcrypt.hashSync(password, 12);

		const user = await prismadb.user.create({
			data: {
				email,
				name,
				hashedPassword,
				image: '',
				emailVerified: new Date(),
			},
		});

		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res.status(400).end();
	}
}
