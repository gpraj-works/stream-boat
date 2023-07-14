import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useMovie from '@/hooks/useMovie';

const movieId = () => {
	const router = useRouter();
	const movieId = router.query.movieId;
	const { data: movie } = useMovie(movieId as string);

	useEffect(() => {
		// const video = document.querySelector('#movie');
		// video.addEventListener('loadedmetadata', () => {
		// 	let minutes = parseInt(video.duration / 60, 10);
		// 	let seconds = video.duration % 60;
		// });

		const handleReload = (e: any) => {
			e.preventDefault();
			e.returnValue = '';

			const confirmationMessage = 'Are you sure you want to refresh this page?';

			if (typeof e.returnValue === 'string') {
				e.returnValue = confirmationMessage;
			}

			return confirmationMessage;
		};

		window.addEventListener('beforeunload', handleReload);
		return () => window.removeEventListener('beforeunload', handleReload);
	}, []);

	return (
		<div className=''>
			<div className='text-white flex items-center justify-between p-6'>
				<div className='flex items-center'>
					<span
						onClick={() => router.push('/')}
						className='bi bi-chevron-left text-2xl font-extrabold cursor-pointer'
					></span>
					<h3 className='mx-6 text-xl'>
						Watching : <span className='font-bold'>{movie?.title}</span>
					</h3>
				</div>
				<div className='text-white'>
					<h3 className='mx-6 text-xl'>
						<span className='bi bi-clock mr-2'></span>
						Duration : <span className='font-bold'>{movie?.duration}</span>
					</h3>
				</div>
			</div>
			<div className='flex justify-center bg-black py-14'>
				<video
					autoPlay
					controls={true}
					src={movie?.videoUrl}
					className='w-auto h-auto'
				></video>
			</div>
		</div>
	);
};

export default movieId;
