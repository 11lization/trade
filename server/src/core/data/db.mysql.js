import { mysqlConfig } from "../utils/config.js";
import mysqlPromise from "mysql2/promise";
import _ from "lodash";
const promiseConnection = await mysqlPromise.createConnection(mysqlConfig);

export async function registerDataQuery(registDataJsonInput) {
  // const owner_nickname = registDataJsonInput["nickname"];
  const title = registDataJsonInput["title"];
  const descript = registDataJsonInput["desc"];
  // const h_ct = registDataJsonInput["h_ct"];
  // const h_data = registDataJsonInput["h_data"];
  // const enc_key = registDataJsonInput["enc_key"];
  const textFile = registDataJsonInput["textFile"];

  // const query = `INSERT INTO data (owner_nickname, title, descript, h_ct, h_data, enc_key, data_path)
  // VALUES('${owner_nickname}', '${title}', '${descript}', '${h_ct}', '${h_data}', '${enc_key}', '${data_path}')`;

  const query = `INSERT INTO data (title, descript, textFile) VALUES('${title}', '${descript}', '${textFile}')`;

  try {
    const [ret] = await promiseConnection.execute(query);
    console.log(ret);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
