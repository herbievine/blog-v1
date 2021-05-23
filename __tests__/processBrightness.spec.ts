import processBrightness from '../utils/processBrightness'

describe('Process Brightness', () => {
  it('Should return 0 for black', () => {
    const hex = '#000000'
    const contrast = parseFloat(processBrightness(hex))

    expect(contrast === 0)
  })

  it('Should return 1 for white', () => {
    const hex = '#FFFFFF'
    const contrast = parseFloat(processBrightness(hex))

    expect(contrast === 1)
  })

  it('Should return 0.5 for red', () => {
    const hex = '#FF0000'
    const contrast = parseFloat(processBrightness(hex))

    expect(contrast === 0.5)
  })

  it('Should return 0.5 for green', () => {
    const hex = '#00FF00'
    const contrast = parseFloat(processBrightness(hex))

    expect(contrast === 0.5)
  })

  it('Should return 0.5 for blue', () => {
    const hex = '#0000FF'
    const contrast = parseFloat(processBrightness(hex))

    expect(contrast === 0.5)
  })
})
