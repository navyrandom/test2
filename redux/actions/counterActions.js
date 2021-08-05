export const INCREMENT_COUNTER = "INCREMENT";
export const DECREMENT_COUNTER = "DECREMENT";

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});