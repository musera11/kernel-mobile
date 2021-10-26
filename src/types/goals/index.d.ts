export interface Goal {
  title: string;
  text: string;
  isCompleted: boolean;
  isCompletedAt?: string;
  _id: string;
}

export interface GoalsState {
  goals: Goal[];
}
