import prisma from "../helpers/prisma";
import IModels from "./modelsInterface";

class ProfileModels {
  public static results: IModels = {
    success: "",
    error: "",
  };

  public static getProfile = async (data: any): Promise<IModels> => {
    try {
      const profile = await prisma.profile.findMany({
        where: {
          OR: [
            { email: data.email },
            { username: data.username },
            { user_id: data.id },
          ],
        },
      });
      this.results.success = profile;
      return this.results;
    } catch (error) {
      this.results.error = error;
      return this.results;
    }
  };

  public static editProfile = async (data: any): Promise<IModels> => {
    try {
      const success = await prisma.profile.update({
        where: { user_id: data.id },
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          bio: data.bio,
          photo: data.photo,
        },
      });
      console.log(success);

      this.results.success = success;
      return this.results;
    } catch (error) {
      this.results.error = error;
      return this.results;
    }
  };
}

export default ProfileModels;
