import "./homepage.css";

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

import Background from "../background/Background";
import NotEnoughDataModal from "../not-enough-data-modal/NotEnoughDataModal";

function Home() {
	const [allowRedirection, setAllowRedirection] = useState(false);

	function redirectToSpotify() {
		const userData = JSON.parse(localStorage.getItem("userData"));
		if (userData) {
			setAllowRedirection(true);
		} else {
			const url =
				process.env.NODE_ENV === "production"
					? "https://vibecheck-backend-production-8135.up.railway.app/login"
					: "http://localhost:5000/login";
			window.location.replace(url);
		}
	}

	return allowRedirection ? (
		<Navigate to={"/compare"} />
	) : (
		<div className="homepage">
			<Helmet>
				<title>Vibe Check</title>
				<meta
					name="description"
					content="Check your music compatibility. Connect your Spotify account and see how well your music taste matches up with others."
				/>
				<link rel="canonical" href="/" />

				{/* Facebook tags */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Vibe Check" />
				<meta
					property="og:description"
					content="Check your music compatibility. Connect your Spotify account and see how well your music taste matches up with others."
				/>
				<meta property="og:url" content="https://thevibecheck.io/" />

				{/* End Facebook tags */}

				{/* Twitter tags */}
				<meta name="twitter:creator" content="@webdevlex" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Vibe Check" />
				<meta
					name="twitter:description"
					content="Check your music compatibility. Connect your Spotify account and see how well your music taste matches up with others."
				/>

				<meta name="twitter:image:alt" content="the homepage"></meta>
				{/* End Twitter tags */}
			</Helmet>
			<Background>
				<div className="content homepage-content">
					<NotEnoughDataModal />
					<h1 className="homepage-heading">VIBECHECK</h1>
					<p className="homepage-subtext">Check your music compatibility</p>
					<button
						className="button focus-outline"
						tabIndex="0"
						onClick={() => redirectToSpotify()}>
						GET STARTED
					</button>
				</div>
			</Background>
		</div>
	);
}

export default Home;
