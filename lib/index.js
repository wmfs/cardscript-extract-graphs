module.exports = function (cardscript) {
  const graphs = {}

  function parseElement (element) {
    switch (element.type) {
      case 'Collapsible':
        element.card.body.forEach(parseElement)
        break
      case 'ColumnSet':
        element.columns.forEach(parseElement)
        break
      case 'CardList':
        element.card.body.forEach(parseElement)
        break
      case 'Input.ApiLookup':
        if (element.parametersCard) element.parametersCard.body.forEach(parseElement)
        break
      case 'TabSet':
        element.tabs.forEach(parseElement)
        break
      case 'Steppers':
        element.steps.forEach(parseElement)
        break
      case 'Tab':
      case 'Step':
      case 'Container':
      case 'Column':
        element.items.forEach(parseElement)
        break
      case 'Graph':
        graphs[element.id] = {
          options: element.stats
        }
    }
  }

  if (cardscript && cardscript.body) {
    cardscript.body.forEach(parseElement)
  }

  return graphs
}
