import React, { useCallback, useMemo } from 'react';
import axios from 'axios';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';

interface FavButtonProps {
	movieId: string;
}

const FavoriteButton: React.FC<FavButtonProps> = ({ movieId }) => {
	const { mutate: mutateFavorites } = useFavorites();
	const { data: currentUser, mutate } = useCurrentUser();

	const isFavorite = useMemo(() => {
		const list = currentUser?.favoriteIds || [];
		return list.includes(movieId);
	}, [currentUser, movieId]);

	const toggleFavorite = useCallback(async () => {
		let response;

		if (isFavorite) {
			response = await axios.delete('/api/favorite', {
				params: {
					movieId,
				},
			});
		} else {
			response = await axios.post('/api/favorite', { movieId });
		}

		const updatedFavoriteIds = response?.data?.favoriteIds;

		mutate({
			...currentUser,
			favoriteIds: updatedFavoriteIds,
		});

		mutateFavorites();
	}, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

	const favIcon = isFavorite ? 'check-circle-fill' : 'plus-circle';

	return (
		<>
			<button onClick={toggleFavorite}>
				<span
					className={`bi bi-${favIcon} text-white text-3xl rounded-full`}
				></span>
			</button>
		</>
	);
};

export default FavoriteButton;
