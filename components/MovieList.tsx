import React from 'react';
import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';

interface MovieListProps {
	data: Record<string, any>[];
	title: String;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
	if (isEmpty(data)) {
		return null;
	}
	return (
		<div className='px-4 md:px-12 my-6 space-y-8'>
			<div>
				<h4 className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
					{title}
				</h4>
				<div className='grid grid-cols-4 gap-4'>
					{data.map((movie) => (
						<MovieCard key={movie.id} data={movie} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
