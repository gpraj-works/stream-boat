import React from 'react';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import Image from 'next/image';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return { props: {} };
}

const profile = () => {
	const { data: user } = useCurrentUser();
	const router = useRouter();

	return (
		<div className='text-white flex justify-center items-center w-screen h-screen'>
			<div>
				<button onClick={() => router.push('/')}>
					<Image
						src='/images/auth/profile.png'
						alt='Profile picture'
						width={100}
						height={0}
						priority
						className='w-auto h-auto'
					/>
				</button>

				<h3 className='mt-6 text-4xl uppercase text-center'> {user?.name}</h3>
				<p className='text-white text-center'>{user?.email}</p>
			</div>
		</div>
	);
};

export default profile;
