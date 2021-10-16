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

const post = async (req) => {
	const sessionId = req.headers.cookie;

	const res = await fetch('http://localhost:5000/playlist', {
		method: 'POST',
		headers: {
			cookie: sessionId,
			'content-type': 'application/json'
		},
		body: JSON.stringify(req.body)
	});

	const data = await res.json();

	console.log(res.status);

	return {
		status: res.status,
		body: data
	};
};

const del = async (req) => {
	const sessionId = req.headers.cookie;
	const { id } = req.body;

	const res = await fetch(`http://localhost:5000/playlist/${id}`, {
		method: 'DELETE',
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

export { get, post, del };
