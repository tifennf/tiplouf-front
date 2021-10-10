import { checkSessionId, validateSessionId } from '$lib/auth';

const getSession = async (request) => {
	const session = {
		user: {
			isLogged: false
		}
	};

	try {
		const ip = import.meta.env.VITE_LOCAL_CHECK_IP;
		const cookie = request.headers.cookie;

		if (cookie === undefined) {
			throw 'There is no cookie';
		}

		const sessionId = validateSessionId(cookie);

		const isLogged = await checkSessionId(sessionId, ip);

		session.user.isLogged = isLogged;
	} catch (error) {
		console.error(error);
	}

	return session;
};

export { getSession };
