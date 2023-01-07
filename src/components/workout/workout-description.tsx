import { useWorkout } from '~/hooks/workouts/use-workout'

interface WorkoutDescriptionProps {
  workoutId: Number
}

export const WorkoutDescription = (props: WorkoutDescriptionProps) => {
  const { workoutId } = props

  const { isLoading, data } = useWorkout(workoutId)

  if (isLoading) {
    return <div>LOADING ANIMATION</div>
  }

  return <div className="p-2 bg-gray-200 rounded whitespace-pre-line">{data?.description}</div>
}
