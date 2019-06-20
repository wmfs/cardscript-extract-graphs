/* eslint-env mocha */

const extractGraphs = require('./../lib/')
const chai = require('chai')
const expect = chai.expect

describe('Extract graphs from a card', function () {
  it('check the graph data has been extracted', function () {
    const graphs = extractGraphs(
      {
        type: 'AdaptiveCard',
        body: [
          {
            type: 'TextBlock',
            text: 'This is a graph'
          },
          {
            id: 'testGraph',
            type: 'Graph',
            stats: {
              mean: '{{data.mean}}',
              stdev: '{{data.stdev}}',
              min: '{{data.min}}',
              max: '{{data.max}}'
            }
          }
        ],
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        version: '1.0'
      }
    )

    expect(graphs).to.eql({
      testGraph: {
        options: {
          mean: '{{data.mean}}',
          stdev: '{{data.stdev}}',
          min: '{{data.min}}',
          max: '{{data.max}}'
        }
      }
    })
  })
})
