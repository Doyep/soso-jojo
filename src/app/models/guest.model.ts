export type GuestStatus = 'present' | 'absent'

export interface Guest {
  id: string,
  firstName: string,
  lastName: string,
  status: GuestStatus
}
