function parseJSON(data, failback) {
  try {
    return JSON.parse(data)
  } catch (err) {
    return failback
  }
}

export { parseJSON }
