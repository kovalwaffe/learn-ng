export namespace UserDPO {
  export type StatusEnum = 'ACTIVE' | 'INACTIVE' | 'REJECTED' | 'FAILED';
  export const StatusEnum = {
    Active: 'ACTIVE' as StatusEnum,
    Inactive: 'INACTIVE' as StatusEnum,
    Rejected: 'REJECTED' as StatusEnum,
    Failed: 'FAILED' as StatusEnum
  }
}
