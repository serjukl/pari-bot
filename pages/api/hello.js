// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const request = require('request');

export default function handler(req, res) {
  const URL = 'https://www.ferra.ru/ru/techlife/news/';
  request(URL, function (err, res, body) {
      if (err) throw err;
      console.log(JSON.stringify({body}));
      res.status(200).json(body)
  });
}
