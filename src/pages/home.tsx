import { useEffect, useState } from 'react'
import { formatDate } from '~/utils/common/date'
import { useWorkouts } from '~/hooks/workouts/use-workouts'
import { WorkoutDescription } from '~/components/workout/workout-description'

export default function Home() {
  const { data: workouts } = useWorkouts()
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    if (workouts?.length) {
      setSelected(workouts[0].id)
    }
  }, [workouts])

  return (
    <div>
      <select
        className="bg-gray-50 border font-medium text-gray-900 rounded-lg focus:ring-teal-500 block w-full p-2"
        onChange={(v) => setSelected(Number(v.target.value))}
      >
        {workouts?.map((w) => (
          <option key={w.id} value={w.id}>
            {formatDate(w.created_at)}
          </option>
        ))}
      </select>

      <div className="w-full mt-4 p-2 bg-gray-50 border text-gray-900 rounded-lg">
        {selected && <WorkoutDescription workoutId={selected} />}
      </div>
    </div>
  )
}
