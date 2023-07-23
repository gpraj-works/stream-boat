import Input from '@/components/Form/Input';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useCallback, useState } from 'react';

const Auth = () => {
	const [name, updateName] = useState('');
	const [email, updateEmail] = useState('');
	const [password, updatePassword] = useState('');

	const [variant, updateVariant] = useState('login');

	const toggleVariant = useCallback(() => {
		updateVariant((currentVariant) =>
			currentVariant === 'login' ? 'register' : 'login'
		);
	}, []);

	const login = useCallback(
		async (e: any) => {
			e.preventDefault();
			try {
				await signIn('credentials', {
					email,
					password,
					callbackUrl: '/profile',
				});
			} catch (error) {
				console.log(error);
			}
		},
		[email, password]
	);

	const register = useCallback(
		async (e: any) => {
			e.preventDefault();
			const data = {
				name,
				email,
				password,
			};
			try {
				await axios.post('/api/register', data);
				// login(e);
			} catch (error) {
				console.log('auth page : ' + error);
			}
		},
		[name, email, password]
	);

	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
			<div className='bg-black w-full h-full lg:bg-opacity-70'>
				<nav className='px-12 py-5 flex md:justify-start justify-center'>
					<Image
						src='/images/stream-boat-logo-text.png'
						alt='StreamBoat | Logo'
						width={250}
						height={0}
						priority
						className='w-auto h-auto'
					/>
				</nav>
				<div className='flex justify-center'>
					<div className='bg-black bg-opacity-60 rounded-lg backdrop-blur-xs 2xl:w-4/12 px-16 py-16'>
						<h2 className='text-white text-4xl font-medium mb-8'>
							{variant === 'login' ? 'SignIn' : 'Register'}
						</h2>
						<div>
							{variant === 'register' && (
								<Input
									type='text'
									id='username'
									label='Enter username'
									value={name}
									onChange={(e: any) => {
										updateName(e.target.value);
									}}
								/>
							)}
							<Input
								type='email'
								id='email'
								label='Enter email'
								value={email}
								onChange={(e: any) => {
									updateEmail(e.target.value);
								}}
							/>
							<Input
								type='password'
								id='password'
								label='Enter password'
								value={password}
								onChange={(e: any) => {
									updatePassword(e.target.value);
								}}
							/>

							<button
								onClick={variant === 'login' ? login : register}
								className='bg-red-600 hover:bg-red-700 transition duration-300 py-3 w-full text-lg text-center text-white rounded-lg'
							>
								{variant === 'login' ? 'LogIn' : 'SignUp'}
							</button>

							<div className='mt-6 flex justify-center items-center'>
								<button
									onClick={() => signIn('google', { callbackUrl: '/profile' })}
									className='bg-white rounded-full p-1 mx-2'
								>
									<img src='/images/auth/google.svg' alt='' className=' w-10' />
								</button>
								<button
									onClick={() => signIn('github', { callbackUrl: '/profile' })}
									className='bg-white rounded-full p-1 mx-2'
								>
									<img src='/images/auth/github.svg' alt='' className=' w-10' />
								</button>
							</div>
						</div>
						<p className='text-neutral-500 mt-6'>
							{variant === 'login'
								? 'First time using StreamBoat?'
								: 'Already a StreamBoat user?'}
							<span
								onClick={toggleVariant}
								className='text-white ml-2 cursor-pointer'
							>
								{variant === 'login'
									? 'Create a new account'
									: 'Login your account'}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
