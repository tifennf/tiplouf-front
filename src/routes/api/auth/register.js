import { auth } from '$lib/auth';

const post = async (req) => {
	const { body } = req;

	const res = await auth('http://localhost:5000/auth/login', JSON.stringify(body));

	return {
		status: res.status,
		body: res.body
	};
};

export { post };
