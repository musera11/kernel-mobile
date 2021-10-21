export interface Feeling {
  dimension: string;
  value: number;
}

export interface CheckInState {
  feelings: Feeling[];
  accomplishments: Accomplishments | {};
}

export interface Accomplishments {
  emotionalAvg: number;
  environmentalAvg: number;
  mentalAvg: number;
  occupationalAvg: number;
  physicalAvg: number;
  socialAvg: number;
  spiritualAvg: number;
  completedGoalsCount: number;
  _id: string;
}
