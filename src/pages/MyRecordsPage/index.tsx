import { APP_SECTION_IDS } from '@app/constants'
import BodyRecords from '@app/containers/BodyRecord'
import MyDiary from '@app/containers/MyDiary'
import MyExercise from '@app/containers/MyExercise'
import { FC } from 'react'

import NavButtons from './components/NavButtons'

const MyRecordsPage: FC = () => {
  return (
    <div className="app-container">
      <NavButtons />
      <BodyRecords id={APP_SECTION_IDS.BodyRecord} className="mt-14" />
      <MyExercise id={APP_SECTION_IDS.Exercise} className="mt-14" />
      <MyDiary id={APP_SECTION_IDS.Diary} className="mt-14" />
    </div>
  )
}

export default MyRecordsPage
