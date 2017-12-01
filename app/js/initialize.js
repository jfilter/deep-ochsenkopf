import drawImages from './artur';
import { dataArtur, dataBurghild, dataChrista, dataErhard, dataCurt } from './data';

document.addEventListener('DOMContentLoaded', () => {
  let currentPath = window.location.pathname;

  // hotfix because there is problem with the width. most likly rounding issue.
  if (navigator.userAgent.indexOf('Safari') > -1) {
    $('#fucksafari').width($('.col-md-4').first().width() - 1);
  }

  if (!currentPath.includes('deep-ochsenkopf')) {
    currentPath = '/deep-ochsenkopf' + currentPath;
  }

  switch (currentPath) {
    case '/deep-ochsenkopf/artur-maerchen/':
      drawImages(dataArtur, 'artur');
      break;
    case '/deep-ochsenkopf/burghild-eichheim/':
      drawImages(dataBurghild, 'burghild');
      break;
    case '/deep-ochsenkopf/christa-eichler/':
      drawImages(dataChrista, 'christa');
      break;
    case '/deep-ochsenkopf/erhard-gross/':
      drawImages(dataErhard, 'erhard');
      break;
    case '/deep-ochsenkopf/curt-muehlenhaupt/':
      drawImages(dataCurt, 'curt');
      break;
  }
});
