const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/health',
        destination: 'http://localhost:5001/api/health',
      },
    ];
  },
};

export default nextConfig;
