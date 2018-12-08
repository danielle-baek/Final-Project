exports.seed = knex =>
  knex('cardData').del()
    .then(() =>
      knex('cardData').insert([
        {date_id: 1, activity_id: 1, rating: 5, log: 'it was good today'},
        {date_id: 1, activity_id: 2, rating: 1, log: ''},
        {date_id: 1, activity_id: 3, rating: 2, log: ''},
        {date_id: 1, activity_id: 4, rating: 4, log: ''},
        {date_id: 1, activity_id: 5, rating: 5, log: ''},
        {date_id: 1, activity_id: 6, rating: 3, log: ''},
        {date_id: 1, activity_id: 7, rating: 5, log: ''},
        {date_id: 1, activity_id: 8, rating: 4, log: ''},
        {date_id: 2, activity_id: 1, rating: 2, log: ''},
        {date_id: 2, activity_id: 2, rating: 3, log: ''},
        {date_id: 2, activity_id: 3, rating: 2, log: ''},
        {date_id: 2, activity_id: 4, rating: 4, log: ''},
        {date_id: 2, activity_id: 5, rating: 4, log: ''},
        {date_id: 2, activity_id: 6, rating: 1, log: ''},
        {date_id: 2, activity_id: 7, rating: 2, log: 'Fell off the wagon'},
        {date_id: 2, activity_id: 8, rating: 2, log: ''},
        {date_id: 3, activity_id: 1, rating: 3, log: ''},
        {date_id: 3, activity_id: 2, rating: 5, log: 'Lazy day'},
        {date_id: 3, activity_id: 3, rating: 1, log: ''},
        {date_id: 3, activity_id: 4, rating: 3, log: ''},
        {date_id: 3, activity_id: 5, rating: 4, log: ''},
        {date_id: 3, activity_id: 6, rating: 2, log: ''},
        {date_id: 3, activity_id: 7, rating: 1, log: ''},
        {date_id: 3, activity_id: 8, rating: 5, log: ''},
        {date_id: 4, activity_id: 1, rating: 3, log: ''},
        {date_id: 4, activity_id: 2, rating: 3, log: ''},
        {date_id: 4, activity_id: 3, rating: 5, log: ''},
        {date_id: 4, activity_id: 4, rating: 1, log: ''},
        {date_id: 4, activity_id: 5, rating: 3, log: ''},
        {date_id: 4, activity_id: 6, rating: 2, log: ''},
        {date_id: 4, activity_id: 7, rating: 1, log: ''},
        {date_id: 4, activity_id: 8, rating: 5, log: ''},
        {date_id: 5, activity_id: 1, rating: 4, log: ''},
        {date_id: 5, activity_id: 2, rating: 2, log: ''},
        {date_id: 5, activity_id: 3, rating: 1, log: ''},
        {date_id: 5, activity_id: 4, rating: 5, log: ''},
        {date_id: 5, activity_id: 5, rating: 3, log: ''},
        {date_id: 5, activity_id: 6, rating: 5, log: ''},
        {date_id: 5, activity_id: 7, rating: 1, log: ''},
        {date_id: 5, activity_id: 8, rating: 3, log: ''},
        {date_id: 6, activity_id: 1, rating: 2, log: ''},
        {date_id: 6, activity_id: 2, rating: 1, log: ''},
        {date_id: 6, activity_id: 3, rating: 5, log: ''},
        {date_id: 6, activity_id: 4, rating: 4, log: ''},
        {date_id: 6, activity_id: 5, rating: 3, log: ''},
        {date_id: 6, activity_id: 6, rating: 2, log: ''},
        {date_id: 6, activity_id: 7, rating: 3, log: ''},
        {date_id: 6, activity_id: 8, rating: 2, log: ''},
        {date_id: 7, activity_id: 1, rating: 3, log: ''},
        {date_id: 7, activity_id: 2, rating: 4, log: ''},
        {date_id: 7, activity_id: 3, rating: 1, log: ''},
        {date_id: 7, activity_id: 4, rating: 5, log: ''},
        {date_id: 7, activity_id: 5, rating: 4, log: ''},
        {date_id: 7, activity_id: 6, rating: 5, log: ''},
        {date_id: 7, activity_id: 7, rating: 5, log: ''},
        {date_id: 7, activity_id: 8, rating: 1, log: ''},
        {date_id: 8, activity_id: 1, rating: 2, log: ''},
        {date_id: 8, activity_id: 2, rating: 3, log: ''},
        {date_id: 8, activity_id: 3, rating: 5, log: ''},
        {date_id: 8, activity_id: 4, rating: 1, log: ''},
        {date_id: 8, activity_id: 5, rating: 1, log: ''},
        {date_id: 8, activity_id: 6, rating: 3, log: ''},
        {date_id: 8, activity_id: 7, rating: 5, log: ''},
        {date_id: 8, activity_id: 8, rating: 3, log: ''},
        {date_id: 9, activity_id: 1, rating: 4, log: ''},
        {date_id: 9, activity_id: 2, rating: 4, log: ''},
        {date_id: 9, activity_id: 3, rating: 2, log: ''},
        {date_id: 9, activity_id: 4, rating: 3, log: ''},
        {date_id: 9, activity_id: 5, rating: 1, log: ''},
        {date_id: 9, activity_id: 6, rating: 1, log: ''},
        {date_id: 9, activity_id: 7, rating: 3, log: ''},
        {date_id: 9, activity_id: 8, rating: 5, log: ''},
        {date_id: 10, activity_id: 1, rating: 5, log: ''},
        {date_id: 10, activity_id: 2, rating: 5, log: ''},
        {date_id: 10, activity_id: 3, rating: 4, log: ''},
        {date_id: 10, activity_id: 4, rating: 5, log: ''},
        {date_id: 10, activity_id: 5, rating: 3, log: ''},
        {date_id: 10, activity_id: 6, rating: 3, log: ''},
        {date_id: 10, activity_id: 7, rating: 5, log: ''},
        {date_id: 10, activity_id: 8, rating: 1, log: ''}
      ])
    )
