import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from './apiClient'
import { Project } from '@/types'

const PROJECTS_QUERY_KEY = ['projects']

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: PROJECTS_QUERY_KEY,
    queryFn: async (): Promise<Project[]> => {
      const response = await apiClient.get('/projects')
      return response.data.data || response.data
    },
  })
}

export const useProjectMutation = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (project: Omit<Project, 'id'>): Promise<Project> => {
      const response = await apiClient.post('/projects', project)
      return response.data.data || response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY })
    },
  })
}

export const useUpdateProjectMutation = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ id, ...project }: Partial<Project> & { id: string }): Promise<Project> => {
      const response = await apiClient.put(`/projects/${id}`, project)
      return response.data.data || response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY })
    },
  })
}

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





