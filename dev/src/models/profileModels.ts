import prisma from "../helpers/prisma";
import IModels from "./modelsInterface";

class ProfileModels {
  public static results: IModels;

  public static editProfile = async (data: any): Promise<any> => {
    try {
      const success = prisma.profile.update({
        where: { user_id: data.userid },
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          bio: data.bio,
          photo: data.photo,
        },
      });
      this.results.success = success;
      return this.results;
    } catch (error) {
      this.results.error = error;
      return this.results;
    }
  };
}
