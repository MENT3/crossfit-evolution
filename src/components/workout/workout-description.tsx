import { useWorkout } from '~/hooks/workouts/use-workout'
import { Spinner } from '~/components/spinner'

interface WorkoutDescriptionProps {
  workoutId: Number
}

export const WorkoutDescription = (props: WorkoutDescriptionProps) => {
  const { workoutId } = props

  const { isLoading, data } = useWorkout(workoutId)

  if (isLoading) {
    return <Spinner />
  }

  return <div className="whitespace-pre-line">{data?.description}</div>
}
