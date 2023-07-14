import React, { useContext } from 'react';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/router';
import { ContextStates } from './Context';

interface MovieProps {
	data: Record<string, any>;
}

const MovieCard: React.FC<MovieProps> = ({ data }) => {
	const router = useRouter();

	// @ts-ignore
	const { state, setState } = useContext(ContextStates);

	return (
		<div className='group col-span relative h-[12vw]'>
			<img
				src={data.thumbnailUrl}
				alt='thumbnail'
				className='w-full h-full cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-200'
			/>
			<div className='opacity-0 absolute top-0 transition duration z-10 invisible sm:visible delay-200 w-full scale-0 group-hover:scale-100 group-hover:-translate-y-[5vw] group-hover:opacity-100'>
				<img
					src={data.thumbnailUrl}
					alt='thumbnail'
					className='w-full h-full cursor-pointer object-cover transition duration shadow-xl rounded-t-md'
				/>
				<div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
					<div className='flex flex-row items-center gap-4'>
						<button onClick={() => router.push(`/watch/${data?.id}`)}>
							<span className='bi bi-play-circle-fill text-white text-3xl rounded-full'></span>
						</button>
						<FavoriteButton movieId={data?.id} />
						<button
							onClick={() =>
								setState({
									...state,
									modal: { status: true, movieId: data?.id },
								})
							}
						>
							<span className='bi bi-info-circle-fill text-white text-3xl rounded-full'></span>
						</button>
					</div>
					<div className='mt-3 flex flex-col gap-1 text-md'>
						<span className='text-green-400'>
							New <span className='text-white'>2023</span>
						</span>
						<span className='text-white'>{data.duration}</span>
						<span className='text-white'>{data.genre}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
