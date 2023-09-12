import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "number_prediction",
    initialState: {
        computer_predict: Math.floor(Math.random() * 15 + 1),
        user_predict: [] as number[],
    },
    reducers: {
        setChangeComputerPrediction: (state) => {
           state.computer_predict = Math.floor(Math.random() * 15 + 1);
        },
        setUserPrediction: (state, action: PayloadAction<number>) => {
            const number = action.payload;
            state.user_predict.push(number);

        },
        clearUserPredict(state){
            let array_length = state.user_predict.length;
            state.user_predict.splice(0, array_length);
        },
        
    },
});

export const { setChangeComputerPrediction, setUserPrediction, clearUserPredict } = Slice.actions;
export default Slice.reducer;
