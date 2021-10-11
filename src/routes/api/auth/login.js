import { auth } from '$lib/auth';

const post = async (req) => {
	const { body } = req;

	const res = await auth('http://localhost:5000/auth/login', JSON.stringify(body));

	const sessionId = res.ok ? { 'set-cookie': res.headers.get('set-cookie') } : {};

	return {
		status: res.status,
		headers: sessionId,
		body: res.body
	};
};

export { post };
