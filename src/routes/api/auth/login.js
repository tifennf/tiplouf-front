import { auth } from '$lib/auth';

const post = async (req) => {
	const { body } = req;

	const res = await auth('http://localhost:5000/auth/login', body);

	const sessionId = res.headers.get('set-cookie');

	return {
		headers: {
			'set-cookie': sessionId
		}
	};
};

export { post };
