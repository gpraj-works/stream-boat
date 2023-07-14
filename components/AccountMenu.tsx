import React from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

interface AccountMenuProps {
	visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
	if (!visible) {
		return null;
	}

	return (
		<div className='absolute top-16 bg-black right-4 w-80 p-4 rounded-md bg-opacity-40 backdrop-blur-sm text-center select-none'>
			<div className='ml-3 mb-4 flex items-center border-b pb-4 border-gray-700'>
				<Image
					src='/images/auth/profile.png'
					alt='Profile picture'
					width={30}
					height={0}
					priority
				/>

				<h3 className='ml-3 text-xl'>Name</h3>
			</div>
			<button onClick={() => signOut()} className='text-center text-gray-400'>
				<em className='bi bi-box-arrow-up-right mr-2'></em> LogOut, I'll Come
				Later!
			</button>
		</div>
	);
};

export default AccountMenu;
