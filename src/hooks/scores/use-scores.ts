import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabase'

export const useScores = (workoutId: number) => {
  return useQuery({
    queryKey: ['scores', workoutId],
    queryFn: async () => {
      const { data } = await supabase.from('score').select().eq('workout_id', workoutId)
      return data
    }
  })
}
