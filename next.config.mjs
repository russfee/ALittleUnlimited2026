const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/specialties.html", destination: "/specialties", permanent: true },
      { source: "/professionals.html", destination: "/professionals", permanent: true },
      { source: "/portfolio.html", destination: "/portfolio", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
