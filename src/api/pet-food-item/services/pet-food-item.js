'use strict';

/**
 * pet-food-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pet-food-item.pet-food-item');
