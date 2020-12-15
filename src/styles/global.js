import { createGlobalStyle } from 'styled-components'

import BebasNeueRegular from './fonts/BebasNeueRegular.ttf'

export default createGlobalStyle`
  @font-face{
    font-family: 'BebasNeueRegular';
    src: url(${BebasNeueRegular});
  }

  &&&{
    body {
      font-family: "BebasNeueRegular";
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 1px;
    }
  }
`
