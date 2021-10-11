const auth = async (ip, userData) =>
	fetch(ip, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: userData
	});

const validateSessionId = (cookie) => {
	if (!cookie) {
		throw 'There is no cookie';
	}

	return cookie.split('=')[1];
};

const checkSessionId = async (sessionId, ip) => {
	const sessionCheck = {
		session_id: sessionId
	};

	const res = await auth(ip, JSON.stringify(sessionCheck));

	return res.ok;
};

export { auth, checkSessionId, validateSessionId };
