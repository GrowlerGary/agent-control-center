// Initial data based on memory/active-context.md

export const initialProjects = [
  {
    id: 1,
    agent: 'Carl',
    task: 'SiteWatch - Client Website Health Monitor',
    description: 'Building Micro-SaaS MVP for monitoring client websites. Includes uptime monitoring, SSL expiration alerts, and client reporting dashboard.',
    status: 'working',
    startTime: '2026-02-20T10:30:00.000Z',
    eta: '2-4 hours',
    comments: [
      {
        id: 101,
        text: 'Donut handed off the research. Top idea selected. Building now.',
        author: 'Carl',
        timestamp: '2026-02-20T10:30:00.000Z'
      }
    ]
  },
  {
    id: 2,
    agent: 'Donut',
    task: 'Micro-SaaS Research Scout',
    description: 'Scouting and researching Micro-SaaS ideas. Completed SiteWatch research and handed off to Carl for building.',
    status: 'complete',
    startTime: '2026-02-20T09:00:00.000Z',
    eta: 'Complete',
    comments: [
      {
        id: 201,
        text: 'Research complete. Blog post published. Handed off to Carl.',
        author: 'Donut',
        timestamp: '2026-02-20T10:00:00.000Z'
      }
    ]
  },
  {
    id: 3,
    agent: 'Imani',
    task: 'Kelly Job Search Assistant',
    description: 'Daily cron job to search for job opportunities for Kelly and deliver results via email.',
    status: 'working',
    startTime: '2026-02-20T12:30:00.000Z',
    eta: 'Daily at 12:30 PM',
    comments: [
      {
        id: 301,
        text: 'Cron job active and running daily.',
        author: 'Imani',
        timestamp: '2026-02-20T12:30:00.000Z'
      }
    ]
  },
  {
    id: 4,
    agent: 'Imani',
    task: 'Marley Spoon Recipe Sync',
    description: 'Weekly import of recipes from Marley Spoon to Mealie. Includes QA verification by Ellie.',
    status: 'complete',
    startTime: '2026-02-20T10:00:00.000Z',
    eta: 'Next: Feb 27, 2026',
    comments: [
      {
        id: 401,
        text: '8 recipes imported today. All verified by Ellie (8/8 pass).',
        author: 'Imani',
        timestamp: '2026-02-20T10:30:00.000Z'
      },
      {
        id: 402,
        text: 'QA complete. One corrupted recipe noted (Baked Brie Pasta).',
        author: 'Ellie',
        timestamp: '2026-02-20T11:00:00.000Z'
      }
    ]
  },
  {
    id: 5,
    agent: 'Ellie',
    task: 'QA Verification',
    description: 'Quality assurance for agent outputs. Currently idle after completing Marley Spoon recipe verification.',
    status: 'idle',
    startTime: null,
    eta: 'On demand',
    comments: []
  },
  {
    id: 6,
    agent: 'Gary',
    task: 'Agent Control Center Dashboard',
    description: 'Building visibility dashboard for all agents and scheduled jobs. MVP with project tracking and comments.',
    status: 'working',
    startTime: '2026-02-20T15:47:00.000Z',
    eta: '2-3 hours',
    comments: []
  }
]

export const initialCronJobs = [
  {
    id: '04b16d35-0fa3-4a9d-8e60-6b8404fe3dc3',
    name: 'Kelly Job Search',
    agent: 'Imani',
    schedule: 'Daily 12:30 PM',
    nextRun: '2026-02-21T17:30:00.000Z',
    lastRunStatus: 'success',
    status: 'active'
  },
  {
    id: 'f716cccd-491b-491f-89d2-0b7ecb362c35',
    name: 'Marley Spoon Recipe Import',
    agent: 'Imani',
    schedule: 'Weekly (Fri 10:00 AM)',
    nextRun: '2026-02-27T15:00:00.000Z',
    lastRunStatus: 'success',
    status: 'active'
  }
]
