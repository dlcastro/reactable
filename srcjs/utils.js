export function classNames(...classes) {
  return classes.filter(cls => cls).join(' ')
}

export function getFirstDefined(...args) {
  return args.find(x => x != null)
}

// Case-insensitive string includes
export function strIncludes(string, substring) {
  return string.toUpperCase().indexOf(substring.toUpperCase()) >= 0
}

// Locale-sensitive, case-insensitive string includes
export function getStrIncludesLocale(locales, options = { sensitivity: 'base' }) {
  const collator = new Intl.Collator(locales, options)
  return (string, substring) => {
    const strLength = string.length
    const substrLength = substring.length
    for (let i = 0; i <= strLength - substrLength; i++) {
      if (collator.compare(string.substring(i, i + substrLength), substring) === 0) {
        return true
      }
    }
    return false
  }
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Get leaf columns as an array
export function getLeafColumns(column) {
  const leafColumns = []
  const recurseColumn = column => {
    if (column.columns) {
      column.columns.forEach(recurseColumn)
    } else {
      leafColumns.push(column)
    }
  }
  recurseColumn(column)
  return leafColumns
}

// Convert row data for react-table v6 compatibility
export function convertRowsToV6(rows) {
  return rows.map(row => {
    if (row.subRows && row.subRows.length > 0) {
      return { _subRows: convertRowsToV6(row.subRows), ...row.values }
    } else {
      return row.values
    }
  })
}
