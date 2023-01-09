import { Database } from '~/types/supabase'

export const ScoreItem = (props: Database['public']['Tables']['score']['Row']) => {
  const { name, value, type } = props

  return (
    <li className="py-0.5 border-b">
      {name} 👉 {value} (type: {type})
    </li>
  )
}
