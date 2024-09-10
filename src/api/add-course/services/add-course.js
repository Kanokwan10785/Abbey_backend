'use strict';

/**
 * add-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-course.add-course');
