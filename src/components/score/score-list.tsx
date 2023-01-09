import { useScores } from '~/hooks/scores/use-scores'
import { Spinner } from '../spinner'
import { ScoreItem } from './score-item'

interface ScoreListProps {
  workoutId: number
}

export const ScoreList = (props: ScoreListProps) => {
  const { workoutId } = props
  const { isLoading, data: scores } = useScores(workoutId)

  if (isLoading) {
    return <Spinner />
  }

  if (!isLoading && !scores?.length) {
    return <p>Aucun scores pour le moment</p>
  }

  return (
    <ul>
      {scores?.map((score) => (
        <ScoreItem key={score.id} {...score} />
      ))}
    </ul>
  )
}
