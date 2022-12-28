import mongoose from 'mongoose';
import {config} from './config';

import Logger from "bunyan";
const log : Logger = config.createLogger('database');
export default ()=>{
  const connect = () =>{
      mongoose.connect(`${config.DATABASE_URL}`)
          .then(()=>{
              log.info("Successfully connect to MangoDB");
          })
          .catch((error)=>{
              log.error('Error connecting to MangoDB',error);
              return process.exit(1);
          });
  } ;
  connect();
  mongoose.connection.on(`disconnected`,connect);
};