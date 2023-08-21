interface Task {
  title: string;
  priority: 'low' | 'med' | 'high' | 'extreme';
  status: 'waiting' | 'in progress' | 'complete';
  timeEstimate: number;
  slot: [];
  day: number;
  month: number;
  year: number;
}
