import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import NextAuth, { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prismadb from '@/lib/prismadb';

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
		}),
		GithubProvider({
			clientId: process.env.NEXT_PUBLIC_GITHUB_ID || '',
			clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || '',
		}),
		Credentials({
			id: 'credentials',
			name: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Email and password required');
				}

				const user = await prismadb.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user.hashedPassword) {
					throw new Error('Email does not exist');
				}

				const isCorrectPassword = await compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error('Incorrect password');
				}

				return user;
			},
		}),
	],
	pages: {
		signIn: '/auth',
	},
	debug: process.env.NODE_ENV === 'development',
	adapter: PrismaAdapter(prismadb),
	session: { strategy: 'jwt' },
	jwt: {
		secret: process.env.NEXT_AUTH_JWT_SECRET,
	},
	secret: process.env.NEXT_AUTH_SECRET,
};

export default NextAuth(authOptions);
