// Shared types
export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Library Branch
export interface DrupalBranch extends DrupalNode {
  address?: string
  phone?: string
  hoursWeekday?: string
  hoursWeekend?: string
  branchFeatures?: string[]
  meetingRooms?: boolean
  parking?: string
  accessibility?: string
}

export interface BranchesData {
  nodeBranches: {
    nodes: DrupalBranch[]
  }
}

// Library Program
export interface DrupalProgram extends DrupalNode {
  programType?: DrupalTerm[]
  ageGroup?: DrupalTerm[]
  schedule?: string
  branchLocation?: string
  registrationRequired?: boolean
  registrationUrl?: string
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// Library Event
export interface DrupalEvent extends DrupalNode {
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventCategory?: DrupalTerm[]
  ageGroup?: DrupalTerm[]
  registrationRequired?: boolean
  registrationUrl?: string
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Library News
export interface DrupalNews extends DrupalNode {
  newsCategory?: DrupalTerm[]
  publishDate?: {
    timestamp: number
  }
  author?: string
  summary?: {
    processed: string
  }
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
