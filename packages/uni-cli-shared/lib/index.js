const tags = require('./tags')

const {
  getJson,
  parseJson
} = require('./json')

const {
  getH5Options,
  getManifestJson,
  getNetworkTimeout,
  parseManifestJson
} = require('./manifest.js')

const {
  getMainEntry,
  getNVueMainEntry,
  parseEntry,
  parsePages,
  getPagesJson,
  parsePagesJson
} = require('./pages')

const {
  md5,
  hasModule,
  hashify,
  camelize,
  hyphenate,
  removeExt,
  normalizePath,
  getComponentName,
  convertStaticStyle
} = require('./util')

const {
  getFlexDirection,
  getPlatformProject,
  isSupportFilters,
  isSupportSubPackages,
  getPlatforms,
  getPlatformGlobal,
  getPlatformScss,
  getPlatformSass,
  runByHBuilderX,
  isInHBuilderX,
  isInHBuilderXAlpha,
  getPlatformExts,
  getPlatformTarget,
  getPlatformVue,
  getPlatformCompiler,
  getShadowCss,
  getPlatformCssVars,
  getPlatformCssnano,
  getShadowTemplate,
  jsPreprocessOptions,
  cssPreprocessOptions,
  htmlPreprocessOptions,
  nvueJsPreprocessOptions,
  nvueCssPreprocessOptions,
  nvueHtmlPreprocessOptions,
  devtoolModuleFilenameTemplate
} = require('./platform')

module.exports = {
  md5,
  tags,
  getJson,
  parseJson,
  hashify,
  hasModule,
  camelize,
  hyphenate,
  removeExt,
  normalizePath,
  parseEntry,
  parsePages,
  getH5Options,
  getMainEntry,
  getNVueMainEntry,
  getPagesJson,
  getManifestJson,
  getNetworkTimeout,
  runByHBuilderX,
  isInHBuilderX,
  isInHBuilderXAlpha,
  isSupportFilters,
  isSupportSubPackages,
  getPlatforms,
  getFlexDirection,
  getPlatformScss,
  getPlatformSass,
  getPlatformExts,
  getPlatformTarget,
  getPlatformProject,
  getPlatformVue,
  getPlatformGlobal,
  getShadowCss,
  getPlatformCssVars,
  getPlatformCssnano,
  getPlatformCompiler,
  getShadowTemplate,
  parsePagesJson,
  parseManifestJson,
  getComponentName,
  convertStaticStyle,
  jsPreprocessOptions,
  cssPreprocessOptions,
  htmlPreprocessOptions,
  nvueJsPreprocessOptions,
  nvueCssPreprocessOptions,
  nvueHtmlPreprocessOptions,
  devtoolModuleFilenameTemplate
}
