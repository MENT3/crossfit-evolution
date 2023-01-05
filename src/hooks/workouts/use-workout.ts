import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabase'

export const useWorkout = (id: Number) => {
  return useQuery({
    queryKey: ['workout', id],
    queryFn: async () => {
      const { data } = await supabase
        .from('workout')
        .select()
        .eq('id', id)
        .limit(1)
        .single()

      return data
    }
  })
}
