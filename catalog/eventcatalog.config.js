const path = require('path');

module.exports = {
  title: 'EventCatalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'Your Company',
  projectName: 'Event Catalog',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  trailingSlash: true,
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  logo: {
    alt: 'EventCatalog Logo',
    // found in the public dir
    src: 'logo.svg',
  },
  headerLinks: [
    { label: 'Events', href: '/events'},
    { label: 'Services', href: '/services' },
    { label: 'Domains', href: '/domains'},
    { label: 'Users', href: '/users'},
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
  ],
  footerLinks: [
    { label: 'Events', href: '/events' },
    { label: 'Services', href: '/services' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
    { label: 'GitHub', href: 'https://github.com/boyney123/eventcatalog-demo/edit/master' }
  ],
  generators: [
    [
      '@eventcatalog/plugin-doc-generator-asyncapi',
      {
        // path to your AsyncAPI files
        pathToSpec: [
            path.join(__dirname, 'asyncapi', 'account-service.yaml'),
            path.join(__dirname, 'asyncapi', 'payment-service.yaml'),
        ],
        // version events if already in catalog (optional)
        versionEvents: true,
        renderMermaidDiagram: true,
        renderNodeGraph: true,
        domainName: 'GeneratedDomain',
      },
    ],
  ],
  users: [
    {
      id: 'dboyne',
      name: 'David Boyne',
      avatarUrl: 'https://pbs.twimg.com/profile_images/1262283153563140096/DYRDqKg6_400x400.png',
      role: 'Developer',
    },
    {
      id: 'mSmith',
      name: 'Matthew Smith',
      avatarUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
      role: 'Developer',
    },
  ],
}
