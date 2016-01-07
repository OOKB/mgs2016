import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'

// query={{ ['students.programId']: value }}
//                 hash="students"
// <Link
//   activeClassName="active"
//   to="/"
//   query={{ ['students.programId']: value }}
// >
//   { label }
// </Link>
class Filters extends Component {
  render() {
    const { options, replacePath } = this.props
    return (
      <ul className="student-filters">
        {
          options.map(({ value, label, itemCount }) => {
            function link() {
              replacePath(`/?profile-programId=${value}#students`)
            }
            return (
              <li key={value} className={value}>
                { itemCount ? <button onClick={link}>{ label }</button> : label }
                { itemCount ? <span className="item-count">{itemCount}</span> : false }
              </li>
            )
          })
        }
      </ul>
    )
  }
}

Filters.propTypes = {
  options: PropTypes.array.isRequired,
  replacePath: PropTypes.func.isRequired,
}

Filters.defaultProps = {
  options: [
    { value: 'programs', label: 'Program' },
    { value: 'galleries', label: 'Gallery' },
    { value: 'dates', label: 'Show Date' },
  ],
}

export default Filters
