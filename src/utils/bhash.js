import bcrypt from 'bcryptjs'
export const hash = async (string) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hashSync(string, salt)
  return hash || null
}

export const hashVerify = async (string, hash) => {
  const isValid = bcrypt.compare(string, hash)
  return isValid
}
