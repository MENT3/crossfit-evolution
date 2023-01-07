import { useEffect, useState } from 'react'
import { useAuth } from '~/contexts/auth-provider'
import { useWorkouts } from '~/hooks/workouts/use-workouts'
import { formatDate } from '~/utils/common/date'
import { WorkoutDescription } from '~/components/workout/workout-description'

export default function Home() {
  const { signOut } = useAuth()
  const { data: workouts } = useWorkouts()
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    if (workouts?.length) {
      setSelected(workouts[0].id)
    }
  }, [workouts])

  return (
    <div>
      <div className="flex justify-between">
        <h2>HOME</h2>

        <button
          onClick={signOut}
          className="px-2 py-1 bg-teal-600 text-sm text-white rounded transition hover:bg-teal-500"
        >
          Logout
        </button>
      </div>

      <select onChange={(v) => setSelected(Number(v.target.value))}>
        {workouts?.map((w) => (
          <option key={w.id} value={w.id}>
            {formatDate(w.created_at)}
          </option>
        ))}
      </select>

      {selected && <WorkoutDescription workoutId={selected} />}
    </div>
  )
}
