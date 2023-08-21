import mongoose from 'mongoose';

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const URL = process.env.DB_URL;

const DB_NAME = 'FlowState';

export const connect = async () => {
  return mongoose.connect(`${URL}/${DB_NAME}?retryWrites=true&w=majority`, {
    user: USER,
    pass: PASS,
  });
};
