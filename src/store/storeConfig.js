import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducers from "../reducers"

const initialState = {}
const store = createStore(
            reducers,
            initialState);

export default store;