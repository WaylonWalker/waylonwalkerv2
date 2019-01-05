import Color from 'color'
import chroma from 'chroma-js'


const purple = chroma('#330026')

const colors = {
    black: '#333',
    white: '#f2f2f2',
    orange: ['#fff0e6'],
    // purple: Color('#330026'),
    purple,
    purples: chroma.scale(['white', purple]).mode('lch').colors(6),
    greys: chroma.scale(['white', purple.desaturate()]).mode('lch').colors(16),

}


export default colors