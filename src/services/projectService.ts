import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from './apiClient'
import { Project } from '@/types'

// Query keys
const PROJECTS_QUERY_KEY = ['projects']

// Fetch projects
export const useProjectsQuery = () => {
  return useQuery({
    queryKey: PROJECTS_QUERY_KEY,
    queryFn: async (): Promise<Project[]> => {
      const response = await apiClient.get('/projects')
      // API returns { success: true, data: projects }
      return response.data.data || response.data
    },
  })
}

// Create project mutation
export const useProjectMutation = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (project: Omit<Project, 'id'>): Promise<Project> => {
      const response = await apiClient.post('/projects', project)
      // API returns { success: true, data: project }
      return response.data.data || response.data
    },
    onSuccess: () => {
      // Invalidate and refetch projects
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY })
    },
  })
}

// Update project mutation
export const useUpdateProjectMutation = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ id, ...project }: Partial<Project> & { id: string }): Promise<Project> => {
      const response = await apiClient.put(`/projects/${id}`, project)
      // API returns { success: true, data: project }
      return response.data.data || response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY })
    },
  })
}

// Delete project mutation
export const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (id: string): Promise<void> => {
      await apiClient.delete(`/projects/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY })
    },
  })
}





