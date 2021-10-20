export interface Feeling {
  dimension: string;
  value: number;
}

export interface CheckInState {
  feelings: Feeling[];
}
