(function () {
  var loader = document.currentScript;
  if (!loader) return;

  var code = loader.dataset.goatcounterCode;
  var productionHost = loader.dataset.productionHost;
  if (!code || !productionHost) return;

  var enabled = window.location.hostname === productionHost;
  var counterBaseUrl = 'https://' + code + '.goatcounter.com';

  window.mechmathAnalytics = {
    counterBaseUrl: counterBaseUrl,
    enabled: enabled,
    path: window.location.pathname || '/'
  };

  if (!enabled) return;

  window.goatcounter = {
    path: function () {
      return window.location.pathname || '/';
    }
  };

  var counter = document.createElement('script');
  counter.async = true;
  counter.src = 'https://gc.zgo.at/count.js';
  counter.dataset.goatcounter = counterBaseUrl + '/count';
  document.head.appendChild(counter);
}());
