import prisma from "../helpers/prisma";
import IModels from "./modelsInterface";

class AuthModels {
  public static results: IModels = {
    success: "",
    error: "",
  };
  public static register = async (data: any): Promise<object> => {
    try {
      const user = await prisma.users.create({
        data,
      });
      const profile = await prisma.profile.create({
        data: { user_id: user.id, username: user.username, email: user.email },
      });

      this.results.success = profile;
      return this.results;
    } catch (error: any) {
      this.results.error = error;
      return this.results;
    }
  };

  public static login = async (data: any): Promise<object> => {
    try {
      const user = await prisma.users.findMany({
        where: { OR: [{ email: data.email }, { username: data.username }] },
      });
      this.results.success = user;
      return this.results;
    } catch (error) {
      this.results.error = error;
      return this.results;
    }
  };
}

export default AuthModels;
