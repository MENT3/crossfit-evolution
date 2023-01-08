import { useScores } from '~/hooks/scores/use-scores'
import { Spinner } from '../spinner'

interface ScoreListProps {
  workoutId: number
}

export const ScoreList = (props: ScoreListProps) => {
  const { workoutId } = props
  const { isLoading, data: scores } = useScores(workoutId)

  if (isLoading) {
    return <Spinner />
  }

  console.log(isLoading, scores)
  if (!isLoading && !scores?.length) {
    return <p>Aucun scores pour le moment</p>
  }

  // TODO: create an item list component
  return (
    <ul>
      {scores?.map((s) => (
        <li key={s.id}>
          {s.name} | {s.value} | {s.type}
        </li>
      ))}
    </ul>
  )
}
