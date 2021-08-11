'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    console.log("Starting to populate...")


    const cat = await strapi.services.game.populate()

    ctx.send(cat)
    // ctx.send("Finished populating!")
  }
};