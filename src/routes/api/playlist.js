const get = async (req) => {
	const sessionId = req.headers.cookie;
	const res = await fetch('http://localhost:5000/playlist', {
		headers: {
			cookie: sessionId
		}
	});

	const data = await res.json();

	return {
		status: res.status,
		body: data
	};
};

export { get };
