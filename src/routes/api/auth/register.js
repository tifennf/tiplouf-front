import { auth } from '$lib/auth';

const post = async (req) => {
	const { body } = req;

	const res = await auth('http://localhost:5000/auth/register', body);

	return {
		body: res.body
	};
};

export { post };
