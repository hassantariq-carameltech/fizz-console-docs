import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import CodePlugin from 'typography-plugin-code'

fairyGateTheme.plugins = [
  new CodePlugin(),
];

fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  '.gatsby-highlight': {
    background: '#272822',
    color: 'white',
  }
})
const typography = new Typography(fairyGateTheme)

export default typography