exports.seed = knex =>
  knex('dates').del()
    .then(() =>
      knex('dates').insert([
        {id: 1, user_id: 1, created_at: '2018-12-06 21:35:55'},
        {id: 2, user_id: 1, created_at: '2018-12-07 21:35:55'},
        {id: 3, user_id: 1, created_at: '2018-12-08 21:35:55'},
        {id: 4, user_id: 1, created_at: '2018-12-09 21:35:55'},
        {id: 5, user_id: 1, created_at: '2018-12-10 21:35:55'},
        {id: 6, user_id: 1, created_at: '2018-12-11 21:35:55'},
        {id: 7, user_id: 1, created_at: '2018-12-12 21:35:55'}
      ])
    )