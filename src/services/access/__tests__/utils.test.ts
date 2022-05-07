import { Role, User } from 'redux/main/types'
import { isUserAllowed } from 'services/access/utils'

const mock = {
  adminUser: {
    roles: ['ADMINISTRATOR', 'USER'],
  } as User,
  defaultUser: {
    roles: ['USER'],
  } as User,
  emptyUser: {
    roles: [] as Role[],
  } as User,
}

describe('Services utils.ts tests', () => {
  it('should return true when user has one allowed role', () => {
    const result = isUserAllowed(mock.adminUser, ['ADMINISTRATOR'])
    expect(result).toBe(true)
  })

  it('should return true when user has all allowed roles', () => {
    const result = isUserAllowed(mock.adminUser, ['ADMINISTRATOR', 'USER'])
    expect(result).toBe(true)
  })

  it('should return false when user does not have allowed role', () => {
    const result = isUserAllowed(mock.adminUser, ['AUDITOR'])
    expect(result).toBe(false)
  })

  it('should return false when user does not have allowed roles', () => {
    const result = isUserAllowed(mock.adminUser, ['AUDITOR', 'ACCOUNTANT'])
    expect(result).toBe(false)
  })

  it('should return true when allowed roles is empty', () => {
    const result = isUserAllowed(mock.defaultUser, [])
    expect(result).toBe(true)
  })

  it('should return true when allowed roles is empty and user roles is empty', () => {
    const result = isUserAllowed(mock.emptyUser, [])
    expect(result).toBe(true)
  })

  it('should return true when allowed roles is not empty and user roles is empty', () => {
    const result = isUserAllowed(mock.emptyUser, ['ADMINISTRATOR'])
    expect(result).toBe(false)
  })
})
