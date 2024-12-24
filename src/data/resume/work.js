/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Samsung Research',
    position: 'Software Engineer',
    url: 'https://research.samsung.com/sri-b',
    startDate: '2023-03',
    summary: 'Built a distributed system from scratch.',
    highlights: [
      'we built a scalable distributed system from scratch. I experienced POCs, development, internal user trials, and the B2B and B2C phases of commercial product development.',
      'Resolved a performance issue by identifying the key-value size limitations in FoundationDB. Later, worked on a new schema for storing the data.',
      'Took ownership of delivering a framework for the POC. This involved working on natural language processing. I had no prior experience in text classification and entity extraction, but I pushed myself out of my comfort zone and delivered a working prototype in a short period.',
    ],
  },
  {
    name: 'Tekion',
    position: 'Software Engineer',
    url: 'https://tekion.com/',
    startDate: '2022-07',
    endDate: '2023-02',
    summary: 'Worked on building support portal (Internal tool like jira)',
    highlights: [
      'Developed RESTful APIs for an internal tool at Tekion, allowing users and employees to create and monitor issues. Provided support for chat functionality between customers and the support team.',
      'Ensured consistency among diverse database values using various cron jobs and scripts. Decreased API response time by effectively implementing Go routines.',
    ],
  },
  {
    name: 'Amazon',
    position: 'Software Development Engineering Intern',
    url: 'https://sell.amazon.in/grow-your-business/advertise',
    startDate: '2022-06',
    endDate: '2022-07',
    summary: 'Worked on Amazon Advertiement Manager tool',
    highlights: [
      'Contributed to Amazon’s ad manager tool (Drona). Created a feature that streamlined the advertising process for external product managers, making it easier for them to promote their brands.',
    ],
  },
];

export default work;
