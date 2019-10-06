module.exports = (template) => {
  return (response) => {
    return {
      ...response,
      mode: 'stub',
      templateType: 'st',
      template
    }
  }
}