'use strict';

/**
 * exercise-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-task.exercise-task');
