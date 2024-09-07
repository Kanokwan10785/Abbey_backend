'use strict';

/**
 * all-exercise service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-exercise.all-exercise');
