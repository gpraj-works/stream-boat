import React, { useState, useContext, useEffect } from 'react';
import { ContextStates } from './Context';
import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';
import FavoriteButton from './FavoriteButton';
import PlayButton from './PlayButton';

const InfoModal = () => {
	//@ts-ignore
	const { state, setState } = useContext(ContextStates);
	const { data: movie, isLoading } = useMovie(state.modal.movieId);
	const router = useRouter();

	const modalStatus = state.modal.status;

	useEffect(() => {
		if (typeof window != 'undefined' && window.document) {
			if (modalStatus) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'unset';
			}
		}
	}, [modalStatus]);

	return (
		<div
			className={`${
				state.modal.status
					? 'fixed top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-zinc-900 bg-opacity-70 backdrop-blur-sm transition duration-150 delay-300'
					: 'hidden'
			}`}
		>
			<div className='bg-zinc-800 drop-shadow-md w-6/12 h-auto relative'>
				<div className='relative'>
					{isLoading && <div className='bg-black h-96'></div>}
					{!isLoading && (
						<video
							autoPlay
							muted
							loop
							poster={movie?.thumbnailUrl}
							src={movie?.videoUrl}
							className=' brightness-50'
						></video>
					)}
					<div className='absolute bottom-8 left-8'>
						<h2 className='text-5xl text-white font-extrabold mb-6'>
							{movie?.title}
						</h2>
						<div className='flex items-center justify-between w-32'>
							<PlayButton movieId={movie?.id} />
							<FavoriteButton movieId={movie?.id} />
						</div>
					</div>
				</div>
				<div className='text-white py-6 px-8 text-lg'>
					<p className='mb-3'>
						<strong className='text-green-500 mr-1.5'>New</strong> 2023
					</p>
					<p className='mb-3'>{movie?.genre}</p>
					<p>{movie?.description}</p>
				</div>
				<span
					onClick={() =>
						setState({ ...state, modal: { ...state.modal, status: false } })
					}
					className='bi bi-x-circle-fill absolute right-5 top-5 cursor-pointer text-2xl text-white'
				></span>
			</div>
		</div>
	);
};

export default InfoModal;
