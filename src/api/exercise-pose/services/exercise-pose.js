'use strict';

/**
 * exercise-pose service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-pose.exercise-pose');
