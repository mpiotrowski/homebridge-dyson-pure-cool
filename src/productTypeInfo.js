const knownProducts = {
  '358': {
    model: 'Dyson Pure Humidify+Cool',
    hardwareRevision: 'PH01',
    hasAdvancedAirQualitySensors: true,
    hasHumidifier: true,
    hasJetFocus: true,
  },
  '358E': {
    model: 'Dyson Pure Humidify+Cool Formaldehyde',
    hardwareRevision: 'PH04',
    hasAdvancedAirQualitySensors: true,
    hasHumidifier: true,
    hasJetFocus: true,
  },
  '438': {
    model: 'Dyson Pure Cool Tower',
    hardwareRevision: 'TP04',
    hasJetFocus: true,
    hasAdvancedAirQualitySensors: true,
  },
  '438E': {
    model: 'Dyson Pure Cool',
    hardwareRevision: 'TP07',
    hasJetFocus: true,
    hasAdvancedAirQualitySensors: true,
  },
  '455': {
    model: 'Dyson Pure Hot+Cool Link',
    hardwareRevision: 'HP02',
    hasHeating: true,
    hasJetFocus: true,
  },
  '469': {
    model: 'Dyson Pure Cool Link Desk',
    hardwareRevision: 'DP01',
  },
  '475': {
    model: 'Dyson Pure Cool Link Tower',
    hardwareRevision: 'TP02',
  },
  '520': {
    model: 'Dyson Pure Cool Desk',
    hardwareRevision: 'DP04',
    hasJetFocus: true,
    hasAdvancedAirQualitySensors: true,
  },
  '527': {
    model: 'Dyson Pure Hot+Cool',
    hardwareRevision: 'HP04',
    hasJetFocus: true,
    hasAdvancedAirQualitySensors: true,
    hasHeating: true,
  },
  '527E': {
    model: 'Dyson Purifier Hot+Cool Formaldehyde',
    hardwareRevision: 'HP09',
    hasJetFocus: true,
    hasAdvancedAirQualitySensors: true,
    hasHeating: true,
  },
};

module.exports = function(productType) {
  const info = {};
  for (const [k, v] of Object.entries(knownProducts[productType] || {})) info[k] = v;
  if (!info.hardwareRevision) info.hardwareRevision = '';
  if (!info.hasAdvancedAirQualitySensors) info.hasAdvancedAirQualitySensors = false;
  if (!info.hasHeating) info.hasHeating = false;
  if (!info.hasHumidifier) info.hasHumidifier = false;
  if (!info.hasJetFocus) info.hasJetFocus = false;
  if (!info.model) info.model = 'Pure Cool';
  return info;
};
