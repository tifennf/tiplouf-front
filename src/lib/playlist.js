const getPlaylist = async (ip) => {
	const response = await fetch(ip);

	if (!response.ok) {
		return [];
	}

	const res = await response.json();

	return res.data;
};
export { getPlaylist };
