import bcrypt from 'bcryptjs'
export const hashGenerate = (string) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(string, salt)
  return hash
}

export const hashVerify = (string, hash) => {
  const match = bcrypt.compareSync(string, hash)
  return match
}
