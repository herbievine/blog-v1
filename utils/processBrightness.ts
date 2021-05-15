const getLightnessOfRGB = (rgbString: string): number => {
  const rgbIntArray = rgbString
    .replace(/ /g, '')
    .slice(4, -1)
    .split(',')
    .map((e) => parseInt(e))

  const highest = Math.max(...rgbIntArray)
  const lowest = Math.min(...rgbIntArray)

  return ((highest + lowest) / 2 / 255) as number
}

const hexToRgb = (hex: string): string => {
  const rgb = {
    r: parseInt(cutHex(hex).substring(0, 2), 16),
    g: parseInt(cutHex(hex).substring(2, 4), 16),
    b: parseInt(cutHex(hex).substring(4, 6), 16),
  }

  return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'
}

const cutHex = (hex: string): string =>
  hex.charAt(0) == '#' ? hex.substring(1, 7) : hex

const processBrightness = (hex: string): number =>
  getLightnessOfRGB(hexToRgb(hex)).toFixed(4)

export default processBrightness
