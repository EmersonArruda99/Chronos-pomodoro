import "./styles/Global.css";
import "./styles/theme.css";

import { Home } from "./pages/Home";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";

const initialState: TaskStateModel = {
    task:[],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        worktime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
    }
};

export function App() {
    const[state, setState] = useState(initialState);
    return <Home state={state} setState={setState}/>;
}
