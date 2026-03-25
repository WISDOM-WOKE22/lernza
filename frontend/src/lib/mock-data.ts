export const mockQuestStats = {
  enrollees: 124,
  rewardPool: 5000,
  milestones: 12,
  completedCount: 8,
  daysLeft: 14
}

export const mockMilestones = [
  {
    id: 1,
    title: "Project Setup",
    description: "Initialize the project with Stellar SDK",
    reward: 100,
    status: "completed" as const
  },
  {
    id: 2,
    title: "Smart Contract Deploy",
    description: "Deploy your first contract to Testnet",
    reward: 250,
    status: "in-progress" as const
  },
  {
    id: 3,
    title: "Frontend Integration",
    description: "Connect the UI to the Stellar network",
    reward: 150,
    status: "locked" as const
  }
]
<<<<<<< HEAD
=======

export const MOCK_MILESTONES: Record<number, Milestone[]> = {
  0: [
    {
      id: 0,
      workspaceId: 0,
      title: "Hello World",
      description: "Write your first program in any language",
      rewardAmount: 50,
    },
    {
      id: 1,
      workspaceId: 0,
      title: "Build a CLI Tool",
      description: "Create a command-line application that solves a real problem",
      rewardAmount: 100,
    },
    {
      id: 2,
      workspaceId: 0,
      title: "Build your first API",
      description: "Create a REST API with at least 3 endpoints",
      rewardAmount: 150,
    },
    {
      id: 3,
      workspaceId: 0,
      title: "Deploy to Production",
      description: "Deploy your API to a cloud provider",
      rewardAmount: 200,
    },
    {
      id: 4,
      workspaceId: 0,
      title: "Build a Full-Stack App",
      description: "Frontend + backend + database. Ship it.",
      rewardAmount: 500,
    },
  ],
  1: [
    {
      id: 0,
      workspaceId: 1,
      title: "Set up Stellar CLI",
      description: "Install and configure the Stellar development environment",
      rewardAmount: 100,
    },
    {
      id: 1,
      workspaceId: 1,
      title: "First Soroban Contract",
      description: "Write, test, and deploy a hello-world contract",
      rewardAmount: 200,
    },
  ],
}

export const MOCK_COMPLETIONS: Record<number, MilestoneCompletion[]> = {
  0: [
    { milestoneId: 0, enrollee: "GDVW...N5HS", completed: true },
    { milestoneId: 1, enrollee: "GDVW...N5HS", completed: true },
    { milestoneId: 0, enrollee: "GATH...R2BM", completed: true },
  ],
}

export const MOCK_ENROLLEES: Record<number, string[]> = {
  0: ["GDVW...N5HS", "GATH...R2BM", "GCEF...WXYZ"],
  1: ["GDVW...N5HS", "GBYZ...ABCD"],
}

export const MOCK_USER_STATS: UserStats = {
  totalEarned: 750,
  workspacesOwned: 2,
  workspacesEnrolled: 1,
  milestonesCompleted: 4,
}

export interface PlatformStats {
  totalQuests: number
  activeUsers: number
  tokensDistributed: number
}

export interface ActivityEvent {
  id: string
  user: string
  action: "enrolled" | "completed" | "created"
  workspaceName: string
  timestamp: number
}

export interface EarningsDataPoint {
  date: string
  amount: number
}

export const MOCK_PLATFORM_STATS: PlatformStats = {
  totalQuests: 156,
  activeUsers: 842,
  tokensDistributed: 125000,
}

// We can just reuse some of the existing workspaces for trending
export const MOCK_TRENDING_QUESTS = [
  MOCK_WORKSPACES[1],
  MOCK_WORKSPACES[0],
]

export const MOCK_RECENT_ACTIVITY: ActivityEvent[] = [
  {
    id: "act_1",
    user: "GBXR...K2YQ",
    action: "completed",
    workspaceName: "Stellar Development Bootcamp",
    timestamp: Date.now() - 1000 * 60 * 30,
  },
  {
    id: "act_2",
    user: "GCMN...P8TL",
    action: "enrolled",
    workspaceName: "Design Fundamentals",
    timestamp: Date.now() - 1000 * 60 * 60 * 2,
  },
  {
    id: "act_3",
    user: "GDVW...N5HS",
    action: "created",
    workspaceName: "Advanced Rust Patterns",
    timestamp: Date.now() - 1000 * 60 * 60 * 24,
  },
]

export const MOCK_EARNINGS_HISTORY: EarningsDataPoint[] = [
  { date: "Jan", amount: 0 },
  { date: "Feb", amount: 150 },
  { date: "Mar", amount: 400 },
  { date: "Apr", amount: 750 },
]
>>>>>>> upstream/main
