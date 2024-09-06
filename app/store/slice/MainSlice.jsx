"use client";

import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    bgImage: 'url(/images/img1.jpeg)'
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        imgChng: (state, { payload }) => { 
            state.bgImage.push(payload); 
            },
    }
})