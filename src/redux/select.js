import each from 'lodash/each'
import get from 'lodash/get'
import map from 'lodash/map'
import merge from 'lodash/merge'
import set from 'lodash/set'
import values from 'lodash/values'

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

function getCollection(state, type) {
  return get(state, info[type].selector || type)
}

function getItem(state, type, id) {
  const collection = getCollection(state, type)
  return collection[id]
}

function getItemChildren(state, item, children) {
  const refs = {}
  each(children, (type, selector) => {
    const id = get(item, selector)
    set(refs, selector, getItem(state, type, id))
  })
  return refs
}

function getType(state, type) {
  const { children } = info[type]
  const collection = getCollection(state, type)
  if (!children) {
    return values(collection)
  }
  return map(collection, item =>
    merge({}, item, getItemChildren(state, item, children))
  )
}

function pick(source, fields) {
  const item = {}
  each(fields, (selector) => set(item, selector, get(source, selector)))
  return item
}

export default function select(state, type, options = {}) {
  let items = getType(state, type)
  if (options.pick) {
    items = map(items, item => pick(item, options.pick))
  }
  return items
}
