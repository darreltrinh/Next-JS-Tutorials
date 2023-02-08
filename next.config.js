/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
  // for migrating and matching based on a unique ID
  // {
  //   source: '/old-blog/:id',
  //   destination: '/new-blog/:id',
  //   permanent: true,
  // },
}

module.exports = nextConfig
