import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: {
        words: [],
    },
    reducers: {
        setWords(state, action) {
            const id = state.words.length + 1; // Use length directly
            const newTurkishWord = action.payload.turkishWord;
            const newEnglishWord = action.payload.englishWord;

            state.words.push({
                id,
                newTurkishWord,
                newEnglishWord
            })

        }
    }
});

export const {setWords} = dictionarySlice.actions;
export const dictionaryReducer =  dictionarySlice.reducer;

