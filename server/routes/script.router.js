const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

/* Information to display on UserPage:
1. Game cards where it's your turn:
    1. Game title (first and seventh actor names)
    2. Users starring
    3. Scene number
    4. Guess points
    5. Game status
*/
/*
2. Filmography:1. game date_created
2. game player_one_id and player one's user first_name and player_two_id 
   and player two's user first_name
3. Game winner_id and user first_name
4. Guess points
*/

// GET all scripts for /new-game view
router.get('/', (req, res) => {
  const queryText = `
  SELECT "first_actor", "seventh_actor" FROM "script" WHERE "script_creator_id" = $1;
  `;
  pool.query(queryText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error getting scripts', error);
      res.sendStatus(500);
    });
});

// GET first and seventh actor for script in /activeGame view
router.get('/:id', (req, res) => {
  console.log(req.user.id, req.params.id);
  const queryText = `
  SELECT "first_actor", "seventh_actor" FROM "script" WHERE "script_creator_id" = $1
  AND "id" = $2;`;
  pool.query(queryText, [req.user.id, req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error getting scripts', error);
      res.sendStatus(500);
    });
});

// POST new script from new-script view
router.post('/', (req, res) => {
  const queryText = `
  INSERT INTO "script" (
  "script_creator_id",
  "first_actor", "first_appearance", "second_actor", "second_appearance",
  "third_actor", "third_appearance", "fourth_actor", "fourth_appearance",
  "fifth_actor", "fifth_appearance", "sixth_actor", "sixth_appearance",
  "seventh_actor")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
  `;
  pool.query(queryText, [
    req.user.id,
    req.body.first_actor, req.body.first_appearance, req.body.second_actor, req.body.second_appearance,
    req.body.third_actor, req.body.third_appearance, req.body.fourth_actor, req.body.fourth_appearance,
    req.body.fifth_actor, req.body.fifth_appearance, req.body.sixth_actor, req.body.sixth_appearance,
    req.body.seventh_actor
  ])
    .then(() => {
      console.log('Script posted');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error posting script', error);
      res.sendStatus(500);
    });
});

module.exports = router;