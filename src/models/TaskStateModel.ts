import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    task: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        worktime: number;
        shortBreakTime: number;
        longBreakTime: number
    }
};