export const error404 = (_req, res) => {
  res.send('404 NOT FOUND').status(404)
}

export const errorServerInternal = (err, _req, res) => {
  res.send(JSON.stringify(err)).status(500)
}
