function parseJSON(data, failback) {
  try {
    return JSON.parse(data)
  } catch (err) {
    return failback
  }
}

function parseFormData(data, failback) {
  try {
    const lines = data
      .split('\r\n')
      .filter((line) => line.trim() !== '' && !line.includes('----'))

    const result = {}

    for (let i = 0; i < lines.length; i += 2) {
      const keyLine = lines[i].trim()

      if (keyLine) {
        const keyStartIndex = keyLine.indexOf('name="') + 6
        const keyEndIndex = keyLine.indexOf('"', keyStartIndex)

        if (keyStartIndex !== -1 && keyEndIndex !== -1) {
          const key = keyLine.substring(keyStartIndex, keyEndIndex)
          const value = lines[i + 1]

          result[key] = value
        }
      }
    }

    return result
  } catch (error) {
    console.error('Error parsing form data:', error)
    throw failback
  }
}

export { parseJSON, parseFormData }
