import { APP_SECTION_IDS } from '@app/constants'
import MyExercise from '@app/containers/MyExercise'
import { FC } from 'react'

import NavButtons from './components/NavButtons'

// TODO: seems this design is for infinite loading, potential performance issue on large list, implement virtual list
const MyRecordsPage: FC = () => {
  return (
    <div className="app-container">
      <NavButtons />
      <MyExercise id={APP_SECTION_IDS.Exercise} className="mt-14" />
    </div>
  )
}

export default MyRecordsPage
