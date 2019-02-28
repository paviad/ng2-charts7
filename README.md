# ng2-charts7 [![npm version](https://badge.fury.io/js/ng2-charts7.svg)](http://badge.fury.io/js/ng2-charts7) [![npm downloads](https://img.shields.io/npm/dm/ng2-charts7.svg)](https://npmjs.org/ng2-charts7)
Beautiful charts for Angular2 based on Chart.js

[![NPM](https://nodei.co/npm/ng2-charts7.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ng2-charts7)
[![NPM](https://nodei.co/npm-dl/ng2-charts7.png?height=3&months=9)](https://npmjs.org/ng2-charts7)

# Usage & Demo

[StackBlitz Demo](https://stackblitz.com/edit/ng2-charts7-demo)

- - -

### Installation

1. You can install ***ng2-charts7*** using npm

  ```bash
  npm install ng2-charts7 --save
  ```
2. You need to install `chart.js` library (it is a peer dependency of this library) (more info can be found in official `chart.js` [documentation](http://www.chartjs.org/docs/#getting-started))

  ```bash
  npm install chart.js --save
  ```

## API

### Import
```typescript
import { ChartsModule } from 'ng2-charts7';

// In your App's module:
imports: [
   ChartsModule
]
```

### Chart types
There are one directive for all chart types: `base-chart`, and there are 6 types of charts: , `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`.

### Properties

**Note**: For more information about possible options please refer to original [chart.js](http://www.chartjs.org/docs) documentation

- `data` (`Array<number[]> | number[]`) -  set of points of the chart, it should be `Array<number[]>` only for `line`, `bar` and `radar`, otherwise `number[]`;
- `datasets` (`Array<{data: Array<number[]> | number[], label: string}>`) - `data` see about, the `label` for the dataset which appears in the legend and tooltips
- `labels` (`?Array<any>`) - x axis labels. It's necessary for charts: `line`, `bar` and `radar`. And just labels (on hover) for charts: `polarArea`, `pie` and `doughnut`
- `chartType` (`?string`) - indicates the type of charts, it can be: `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`
- `options` (`?any`) - chart options (as from [Chart.js documentation](http://www.chartjs.org/docs/))
- `colors` (`?Array<any>`) - data colors, will use default and|or random colors if not specified (see below)
- `legend`: (`?boolean=false`) - if true show legend below the chart, otherwise not be shown

### Events

- `chartClick`: fires when click on a chart has occurred, returns information regarding active points and labels
- `chartHover`: fires when mousemove (hover) on a chart has occurred, returns information regarding active points and labels


### Colors

There are a set several default colors. Colors can be replaced using the `colors` attribute. If there is more data than colors, colors are generated randomly.


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/paviad/ng2-charts7/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/paviad/ng2-charts7/blob/master/LICENSE) file for the full text)
