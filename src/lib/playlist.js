const getPlaylist = async (ip) => {
	const response = await fetch(ip);

	if (response.status !== 200) {
		throw 'Could not fetch user playlist';
	}

	const res = await response.json();
	return res.data;
};
export { getPlaylist };
