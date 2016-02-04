const info = {
  profile: {
    selector: 'entities.profile',
    children: {
      photo: 'url',
      'art.work': 'url',
      program: 'program',
    },
  },
  program: {
    selector: 'entities.program',
  },
  url: {
    selector: 'entities.url',
  },
}

export default info
