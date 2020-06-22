import { createGlobalStyle } from "styled-components"
import fontFiles from './fonts/fonts'

export default createGlobalStyle`

@font-face {
    font-family: "GallowTree";
    src: local("GallowTree"), url(${fontFiles.GallowTree}) format('ttf');
}

`
