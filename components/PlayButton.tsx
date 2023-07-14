import React from 'react';
import { useRouter } from 'next/router';

interface PlayButtonProps {
	movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
	const router = useRouter();
	return (
		<button
			onClick={() => router.push(`/watch/${movieId}`)}
			className='bg-white py-2 px-4 rounded-lg mr-1.5'
		>
			<em className='bi bi-play-circle-fill mr-1'></em> Play
		</button>
	);
};

export default PlayButton;
