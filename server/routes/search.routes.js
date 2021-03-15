const { Router } = require('express');
const router = Router();

router.get('/en', async (request, response) => {
  try {
    const italy = '../assets/images/italy/italy.jpg';

    // const countries = [
    //   { name: 'Italy', capital: 'Rome' },
    //   { name: 'Germany', capital: 'Berlin' },
    //   { name: 'France', capital: 'Paris' },
    //   { name: 'Poland', capital: 'Warsaw' },
    //   { name: 'Latvia', capital: 'Riga' },
    //   { name: 'Czech', capital: 'Prague' },
    //   { name: 'Norway', capital: 'Oslo' },
    //   { name: 'Switzerland', capital: 'Bern' },
    // ];

    const countries = [
      { name: 'Italy', capital: 'Rome', image: italy },
      { name: 'Germany', capital: 'Berlin', image: italy },
      { name: 'France', capital: 'Paris', image: italy },
      { name: 'Poland', capital: 'Warsaw', image: italy },
      { name: 'Latvia', capital: 'Riga', image: italy },
      { name: 'Czech', capital: 'Prague', image: italy },
      { name: 'Norway', capital: 'Oslo', image: italy },
      { name: 'Switzerland', capital: 'Bern', image: italy },
    ];

    return response.json({ data: countries });
  } catch (error) {
    response.status(500).json({ message: 'Something went wrong, please, try again' });
  }
});

module.exports = router;
