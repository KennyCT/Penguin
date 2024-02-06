import { RowDataPacket, OkPacket } from "mysql2"
var mysql = require('mysql2')
//import * as mysql from "mysql2"
//import { RowDataPacket } from "mysql2";


export interface IUser extends RowDataPacket {
    username?: string;
    firstname?: string;
}

export interface PublicUser {
    readAll() : Promise<IUser[]>;
    fart() : string;
}


const connection = mysql.createConnection({
    host: '212.192.28.59',
    user: 'u111397_aTYQzdEwki',
    password: '',
    database: 's111397_penguin'
});


export class UserRepository implements PublicUser {

  readAll(): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      connection.query<IUser[]>("SELECT * FROM users", (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  fart(): string {
    return "farttt";
  }

}

const user = new UserRepository();
export default user;