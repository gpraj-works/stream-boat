import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItems from './NavItems';
import MobileMenu from './MobileMenu';
import AccountMenu from '../AccountMenu';

const TOP_OFFSET = 60;

const Navbar = () => {
	const [showMobileMenu, setMobileMenu] = useState(false);
	const [showAccountMenu, setAccountMenu] = useState(false);
	const [showNavBackground, setNavBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > TOP_OFFSET) {
				setNavBackground(true);
			} else {
				setNavBackground(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [TOP_OFFSET]);

	const toggleMobileMenu = useCallback(() => {
		setMobileMenu((current) => !current);
	}, []);

	const toggleAccountMenu = useCallback(() => {
		setAccountMenu((current) => !current);
	}, []);

	return (
		<nav
			className={`flex justify-between items-center w-full py-3 px-5 fixed top-0 z-40 transition duration-150 ${
				showNavBackground && 'bg-black bg-opacity-50'
			}`}
		>
			<div className='flex items-center'>
				<Link href='/'>
					<Image
						src='/images/stream-boat-logo-text.png'
						alt='StreamBoat Logo'
						width={250}
						height={0}
						priority
						className='w-auto h-auto'
					/>
				</Link>

				<ul className='text-white list-none lg:inline-flex gap-5 mx-6 hidden'>
					<NavItems label='Home' />
					<NavItems label='Series' />
					<NavItems label='Films' />
					<NavItems label='New & Popular' />
					<NavItems label='My Favorites' />
					<NavItems label='By Language' />
				</ul>

				<div className='lg:hidden flex flex-row'>
					<span
						className='text-white mx-6 cursor-pointer select-none'
						onClick={toggleMobileMenu}
					>
						Browse
						<em
							className={`bi bi-chevron-${showMobileMenu ? 'up' : 'down'} ml-2`}
						></em>
					</span>
					<MobileMenu visible={showMobileMenu} />
				</div>
			</div>
			<div className='inline-flex gap-8 text-white text-lg'>
				<span className='cursor-pointer'>
					<em className='bi bi-search'></em>
				</span>
				<span className='cursor-pointer'>
					<em className='bi bi-bell'></em>
				</span>
				<span onClick={toggleAccountMenu} className='cursor-pointer'>
					<em className='bi bi-person-circle'></em>
				</span>
				<AccountMenu visible={showAccountMenu} />
			</div>
		</nav>
	);
};

export default Navbar;
