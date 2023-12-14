const sql = require('better-sqlite3');
const db = sql('posts.db');

const dummyPosts = [
  {
    text: 'Today is good day',
    creator: 'John Doe',
    date: new Date('2023-12-14T08:30:00').toISOString(),
  },
  {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-13T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-12T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-11T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-10T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-09T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-08T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-07T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-06T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-05T08:30:00').toISOString(),
 },
 {
   text: 'Today is good day',
   creator: 'John Doe',
   date: new Date('2023-12-05T08:20:00').toISOString(),
 },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS posts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       text TEXT NOT NULL,
       creator TEXT NOT NULL,
       date INTEGER
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO posts VALUES (
         null,
         @text,
         @creator,
         @date
      )
   `);

  for (const post of dummyPosts) {
    stmt.run(post);
  }
}

initData();
