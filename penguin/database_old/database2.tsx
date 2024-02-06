import mysql from "mysql2";
//import dbConfig from "../config/db.config";

import { RowDataPacket } from "mysql2"

export default mysql.createConnection({
    host: '212.192.28.59',
    user: 'u111397_aTYQzdEwki',
    password: '',
    database: 's111397_penguin'
});


class UserRepository implements IUserRepository { }

  retrieveById(tutorialId: number): Promise<Tutorial> { }

}


retrieveById(tutorialId: number): Promise<Tutorial> {
    return new Promise((resolve, reject) => {
      connection.query<Tutorial[]>(
        "SELECT * FROM tutorials WHERE id = ?",
        [tutorialId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }



export default interface Users extends RowDataPacket {
    username?: string;
    firstname?: string;
}


