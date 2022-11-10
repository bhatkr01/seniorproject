/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				// hostname: '127.0.0.1',
				hostname: "10.28.164.119",
				port: "8000",
				pathname: "/media/images/**",
			},
		],
	},

	env: {
		baseURL: "http://10.28.164.119:8000/api/",
	},
};

module.exports = nextConfig;
