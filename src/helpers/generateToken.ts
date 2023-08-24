const jwt = require("jsonwebtoken");
import "dotenv/config";

export const generateJWT = (uid: number, email: string): Promise<string> => {
  const payload = { uid, name: email };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED as string,
      {
        expiresIn: "24h",
      },
      (err: Error | null, token: string | undefined) => {
        if (err) {
          console.error(err);
          reject(err);
        } else if (token) {
          resolve(token);
        } else {
          reject(new Error("Token no generado"));
        }
      }
    );
  });
};
