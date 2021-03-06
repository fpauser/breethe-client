import { SchemaSettings } from '@orbit/data';
import { ModelDefinition } from '@orbit/data';

export const location: ModelDefinition = {
  attributes: {
    name: { type: 'string' },
    city: { type: 'string' },
    label: { type: 'string' },
    coordinates: { type: 'string' },
    country: { type: 'string' },
    identifier: { type: 'string' },
    visitedAt: { type: 'string' }
  },
  relationships: {
    measurements: { type: 'hasMany', model: 'measurement', inverse: 'location' }
  }
};

export const measurement: ModelDefinition = {
  attributes: {
    parameter: { type: 'string' },
    measuredAt: { type: 'string' },
    unit: { type: 'string' },
    value: { type: 'string' },
    qualityIndex: { type: 'string' }
  },
  relationships: {
    location: { type: 'hasOne', model: 'location', inverse: 'measurements' }
  }
};

export const schema: SchemaSettings = {
  models: {
    location,
    measurement
  }
};
