const getPlaylist = async (ip) => {
	const response = await fetch(ip);

	if (!response.ok) {
		return [];
	}

	const res = await response.json();

	return res.data;
};

const postPlaylist = async (ip, data) => {
	const response = await fetch(ip, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: data
	});

	const res = await response.json();

	return res;
};

export { getPlaylist, postPlaylist };
