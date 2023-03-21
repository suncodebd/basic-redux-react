import { DECREMENT, INCREMENT, RESET } from '../constant/Const';

export const incrementCounter = () => ({
    type: INCREMENT,
});
export const decrementCounter = () => ({
    type: DECREMENT,
});
export const resetCounter = () => ({
    type: RESET,
});
