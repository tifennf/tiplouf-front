const auth = async (ip, userData, error) => {
	const res = await fetch(ip, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: userData
	});
	if (res.status < 200 || res.status > 299) {
		throw error;
	}

	return res;
};

export { auth };
