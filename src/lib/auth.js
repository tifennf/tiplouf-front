const auth = async (ip, userData) => {
	const res = await fetch(ip, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: userData
	});

	return res;
};

export { auth };
