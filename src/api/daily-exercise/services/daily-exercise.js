'use strict';

/**
 * daily-exercise service
 */

const _ = require('lodash');

module.exports = {
  async createDailyExercise() {
    const today = new Date().toISOString().slice(0, 10);
    const existing = await strapi.query('daily-exercise').findOne({ date: today });

    if (existing) {
      return existing;
    }

    const allExercises = await strapi.query('exercise-pose').find();
    const randomExercises = _.sampleSize(allExercises, 15);

    const totalTime = randomExercises.reduce((acc, exercise) => acc + exercise.duration, 0);
    const totalCalories = randomExercises.reduce((acc, exercise) => acc + exercise.calories, 0);

    const dailyExercise = await strapi.query('daily-exercise').create({
      date: today,
      exercises: randomExercises.map(ex => ex.id),
      totalTime,
      totalCalories,
    });

    return dailyExercise;
  }
};

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-exercise.daily-exercise');
