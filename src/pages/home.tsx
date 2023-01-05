import { useState } from 'react'
import { useAuth } from '~/contexts/auth-provider'
import { useWorkouts } from '~/hooks/workouts/use-workouts'

import { WorkoutDescription } from '~/components/workout/workout-description'

export default function Home() {
  const { signOut } = useAuth()
  const { data: workouts } = useWorkouts()

  const [selectedWorkout, setSelectedWorkout] = useState({})

  if (!workouts?.length) {
    return <div>Aucun entrainement</div>
  }

  return (
    <div>
      <h2>HOME</h2>

      <WorkoutDescription workoutId={workouts[0].id} />

      <button onClick={signOut}>Logout</button>
    </div>
  )
}
