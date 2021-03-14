const { Router } = require('express');
const router = Router();

router.get('/', async (request, response) => {
  try {
    // const date = JSON.parse(request.body);
    return response.json({ data: `It\'s ok`});
  } catch (error) {
    response.status(500).json({ message: 'Something went wrong, please, try again' });
  }
});

module.exports = router;
