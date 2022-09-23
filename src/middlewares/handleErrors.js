export const error404 = (_req, res) => {
  const { headers } = _req

  if (headers['content-type'] === 'application/json')
    return res.status(404).json({
      body: 'Not Found',
    })

  res.status(404).end()
}

export const errorServerInternal = (err, _req, res) => {
  res.status(500).json(err)
}
