import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabase'

export const useWorkouts = () => {
  return useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const { data } = await supabase
        .from('workout')
        .select('id, created_at')
        .order('created_at', { ascending: false })

      return data
    }
  })
}
