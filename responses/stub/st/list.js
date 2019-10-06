module.exports = (generatorRange, template) => {
  return (response) => {
    return {
      ...response,
      mode: 'stub',
      generatorRange,
      templateType: 'st',
      template
    }
  }
}