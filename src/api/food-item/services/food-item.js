'use strict';

/**
 * food-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-item.food-item');
