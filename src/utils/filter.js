import compact from 'lodash/array/compact'
import every from 'lodash/collection/every'
import filter from 'lodash/collection/filter'
import forEach from 'lodash/collection/forEach'
import get from 'lodash/object/get'
import isArray from 'lodash/lang/isArray'
import isEmpty from 'lodash/lang/isEmpty'
import isObject from 'lodash/lang/isObject'
import values from 'lodash/object/values'

export function filterItem(item, { fieldId, compare, value }) {
  if (!value) return true
  const itemValue = get(item, fieldId)
  switch (compare) {
    case 'is':
    case 'equal':
      return itemValue === value
    case 'includes':
      return every(compact(value.split(' ')), searchTxt =>
        itemValue.toLowerCase().includes(searchTxt)
      )
    default:
      return true
  }
}

export function filterCollection(items, filterParams) {
  if (isEmpty(filterParams)) {
    return values(items)
  }
  // Filter based on an array of params.
  if (isArray(filterParams)) {
    return filter(items, item =>
      every(filterParams, (fParam) => filterItem(item, fParam))
    )
  }
  // Filter collection against single filterParams.
  if (isObject(filterParams)) {
    return filter(items, item => filterItem(item, filterParams))
  }
  // Error filterParams are not object or array.
  return items
}

// Create new index with quantity of each. Simple reduce like function.
export function itemCount(items, fieldId) {
  const optionCountIndex = {}
  forEach(items, item => {
    const indexId = get(item, fieldId)
    const preVal = get(optionCountIndex, indexId, 0)
    optionCountIndex[indexId] = preVal + 1
  })
  return optionCountIndex
}
