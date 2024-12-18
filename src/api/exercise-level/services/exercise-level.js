'use strict';

/**
 * exercise-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-level.exercise-level');
