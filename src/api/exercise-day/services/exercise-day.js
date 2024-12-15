'use strict';

/**
 * exercise-day service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-day.exercise-day');
