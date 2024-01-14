export type GuestStatus = 'present' | 'absent'

export interface Guest {
  _uuid?: string,
  firstName: string,
  lastName: string,
  status: GuestStatus
}
