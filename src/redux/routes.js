import get from 'lodash/get'
import createRouter from 'location-info'

import { apiRequest } from './modules/socket'
const router = createRouter()

export default function getRoutes({ getState, dispatch }) {
  router.makeRoute('home', '/')
  router.makeRoute('profile', '/student/:id')
  router.makeRoute('downloader', '/image-download', {
    getState: () => {
      const downloading = get(getState(), 'routing.state.downloading', true)
      if (downloading) {
        dispatch(apiRequest('artwork'))
      }
      return {
        downloading,
      }
    },
  })

  router.makeRoute('tryProfile', '/:id', {
    redirect: (info, route) => {
      return {
        ...info,
        pathname: `/student/${route.params.id}`,
      }
    },
  })

  return router
}
