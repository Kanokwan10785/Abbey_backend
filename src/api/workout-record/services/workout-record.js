'use strict';

/**
 * workout-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workout-record.workout-record');
