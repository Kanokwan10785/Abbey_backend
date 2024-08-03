'use strict';

/**
 * daily-exercise controller
 */


module.exports = {
  async create(ctx) {
    const service = strapi.services['daily-exercise'];
    const dailyExercise = await service.createDailyExercise();
    ctx.send(dailyExercise);
  },

  async find(ctx) {
    const today = new Date().toISOString().slice(0, 10);
    const dailyExercise = await strapi.query('daily-exercise').findOne({ date: today });

    if (!dailyExercise) {
      ctx.send({ message: 'No exercises for today yet' });
      return;
    }

    ctx.send(dailyExercise);
  }
};


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::daily-exercise.daily-exercise');
