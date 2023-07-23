const nextConfig = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	httpAgentOptions: {
		keepAlive: false,
	},
	eslint: {
		ignoreDuringBuilds: true,
	  },
	// distDir: './build',
};

module.exports = nextConfig;
