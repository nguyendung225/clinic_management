import { IBenhNhan } from "./IPhongBenh";

export interface IGiuongBenh {
  id?: string;
  maGiuong: string;
  dsBenhNhan: [IBenhNhan?, IBenhNhan?];
}