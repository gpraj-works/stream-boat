import React, { useContext } from 'react';
import useBillboard from '@/hooks/useBillboard';
import PlayButton from './PlayButton';
import { ContextStates } from './Context';

const Billboard = () => {
	const { data: randomClip } = useBillboard();
	// @ts-ignore
	const { state, setState } = useContext(ContextStates);

	return (
		<div className='relative  h-[56.25vw]'>
			<video
				autoPlay
				loop
				muted
				poster={randomClip?.thumbnailUrl}
				src={randomClip?.videoUrl}
				className='w-full h-[56.25vw] object-cover brightness-[50%]'
			></video>
			<div className='absolute top-[30%] md:top-[40] ml-4 md:ml-16 lg:w-[50%] w-[80%]'>
				<h1 className='text-white lg:text-6xl text-4xl font-bold lg:mb-5 mb-3'>
					{randomClip?.title}
				</h1>
				<p className='text-white lg:text-xl text-lg lg:mb-5 mb-3'>
					{randomClip?.description}
				</p>
				<PlayButton movieId={randomClip?.id} />
				<button
					onClick={() =>
						setState({
							...state,
							modal: { status: true, movieId: randomClip?.id },
						})
					}
					className='bg-white bg-opacity-30 text-white py-2 px-4 rounded-lg ml-1.5'
				>
					<em className='bi bi-info-circle mr-1'></em> More Info
				</button>
			</div>
		</div>
	);
};

export default Billboard;
