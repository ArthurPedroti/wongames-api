'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const axios = require('axios');

async function getGameInfo(slug) {
  const jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  console.log(slug);
  const body = await axios.get(`https://www.gog.com/game/${slug}`);
  const dom = new JSDOM(body);
  console.log(body);
  console.log(dom);

  const description = dom.window.document.querySelector('.description');
  console.log(description.textContext.trim().slice(0, 160))
  return description;

  // return {
  //   rating: 'BR0',
  //   short_description: description.textContext.slice(0, 160),
  //   description: description.innerHTML,
  // }
}

module.exports = {
  populate: async (params) => {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`

    const { data: { products } } = await axios.get(gogApiUrl);

    return(await getGameInfo(products[0].slug))
  }
};
