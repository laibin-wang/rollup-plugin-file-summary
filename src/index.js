import { cyan, gray, green } from 'colorette'
import gzipSize from 'gzip-size'
import prettyBytes from 'pretty-bytes'

export default function fileSummary() {
  return {
    name: 'file-summary',
    generateBundle: (_, bundle) => {
      Object.values(bundle).forEach(({ code, fileName, isEntry }) => {
        if (isEntry) {
          console.error(`${cyan(fileName)}: ${green(prettyBytes(code.length))} → ${green(prettyBytes(gzipSize.sync(code)))} ${gray('(gzip)')}`)
        }
      })
    }
  }
}
