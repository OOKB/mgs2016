// import get from 'lodash/object/get'
import createRouter from 'location-info'

const router = createRouter()
router.makeRoute('home', '/')
router.makeRoute('profile', '/student/:id')
router.makeRoute('imgDownload', '/image-download')

router.makeRoute('tryProfile', '/:id', {
  redirect: (info, route) => {
    return {
      ...info,
      pathname: `/student/${route.params.id}`,
    }
  },
})

export default function getRoutes({ getState }) {
  // function validateStudent({ id }) {
  //   !!get(getState(), [ 'entities', 'profile', ])
  // }
  return router
}
