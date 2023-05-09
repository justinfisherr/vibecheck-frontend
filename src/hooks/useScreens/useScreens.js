import React, { useContext } from 'react';

import Screen2 from '../../components//screen2/Screen2';
import MatchingArtists from '../../components/matching-artists/MatchingArtists';
import NoMatches from '../../components/no-matches/NoMatches';
import RecommendationText from '../../components/recommendation-text/RecommendationText';
import RecommendedArtists from '../../components/recommended-artists/RecommendedArtists';
import Screen1 from '../../components/screen1/Screen1';
import Screen4 from '../../components/screen4/Screen4';
import Screen5 from '../../components/screen5/Screen5';
import { animationContext } from '../../context/animationContext';

export default function useScreens() {
	const animationData = useContext(animationContext);
	let screens = [];
	let styles = [];

	const saved = localStorage.getItem('animationData');
	animationData.current = JSON.parse(saved);

	styles.push('intro');
	screens.push(<Screen1 animationData={animationData.current} />);

	const artistsWords = [
		'based',
		'on',
		'your',
		'matching',
		'genres',
		'here',
		'are',
		'some',
		'Artists',
		animationData.current.users.user2.username,
		'would',
		'recommend',
		'.',
		'.',
		'.',
		'☺',
	];

	const songWords = [
		'based',
		'on',
		'your',
		'matching',
		'genres',
		'here',
		'is',
		'some',
		'Songs',
		animationData.current.users.user2.username,
		'would',
		'recommend',
		'.',
		'.',
		'.',
		'☺',
	];

	// Genres
	if (animationData.current.match_profile.matching_genres.length === 0) {
		styles.push('no-match');
		screens.push(
			<NoMatches animationData={animationData.current} type={'Genres'} />
		);
	} else {
		styles.push('genres');
		screens.push(
			<Screen2
				genres={animationData.current.match_profile.matching_genres}
				text={'Matching'}
			/>
		);

		// Artists
		if (animationData.current.match_profile.matching_artists.length === 0) {
			styles.push('no-match');
			screens.push(
				<NoMatches animationData={animationData.current} type={'Artists'} />
			);
		} else {
			styles.push('artists');
			screens.push(<MatchingArtists animationData={animationData.current} />);
		}

		styles.push('but-here-artists');
		screens.push(
			<RecommendationText wordsToDisplay={artistsWords} wordsType={'Artists'} />
		);

		styles.push('recommended-artists');
		screens.push(
			<RecommendedArtists
				recommended={animationData.current.users.user2.recommended_artists}
				type={'Artists'}
			/>
		);

		// Songs
		if (animationData.current.match_profile.matching_songs.length === 0) {
			styles.push('no-match');
			screens.push(
				<NoMatches animationData={animationData.current} type={'Songs'} />
			);
		} else {
			styles.push('songs');
			screens.push(<Screen4 animationData={animationData.current} />);
		}

		styles.push('but-here-songs');
		screens.push(
			<RecommendationText wordsToDisplay={songWords} wordsType={'Songs'} />
		);

		styles.push('recommended-songs');
		screens.push(
			<RecommendedArtists
				recommended={animationData.current.users.user2.recommended_songs}
				type={'Songs'}
			/>
		);
	}

	styles.push('percent');
	screens.push(<Screen5 animationData={animationData.current} />);

	return [screens, styles];
}
