import { auth } from '$lib/auth';

const post = async (req) => {
	const { body } = req;

	try {
		const res = await auth(
			'http://localhost:5000/auth/login',
			JSON.stringify(body),
			'Failed to login on auth service'
		);

		const sessionId = res.headers.get('set-cookie');

		return {
			headers: {
				'set-cookie': sessionId
			}
		};
	} catch (error) {
		console.error(error);
	}
};

export { post };
