export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
  createdAt: string
  updatedAt: string
}

export interface ProjectFormData {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
}

export interface ProjectFilters {
  technology?: string
  featured?: boolean
  search?: string
}






