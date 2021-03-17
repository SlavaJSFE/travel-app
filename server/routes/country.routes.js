const Router = require("express");
const config = require("config");
const Country = require("../models/Country");
const router = new Router();

router.post('/country', 
  async (req, res) => {
    try {
      const {country} = req.body;
      // console.log(country);
      const resCountry = await Country.findOne({country: country});
      // console.log(resCountry);
      if (!resCountry) {
        return res.status(404).json({message: "Country not found"});
      }
      return res.json({
        // user: {
            country: resCountry.country,
            photo: resCountry.photo,
            capital: resCountry.capital,
            info: resCountry.info,
            gallery: resCountry.gallery,
            en: resCountry.en,
            ru: resCountry.ru,
            pl: resCountry.pl
        // }
      });
    } catch (e) {
        console.log(e);
        res.send({message: "Server error"});
    }
});


module.exports = router;