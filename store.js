import { configureStore } from '@reduxjs/toolkit'
import Reduxslice from './src/components/slice/Reduxslice'


export default configureStore({
  reducer: {
    counter : Reduxslice,
  },
})