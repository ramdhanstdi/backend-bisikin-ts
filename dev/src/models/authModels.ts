import prisma from "../helpers/prisma";
import IModels from "./modelsInterface";
export const register = async (data: any): Promise<object> => {
  let results: IModels = {
    success: "",
    error: "",
  };
  try {
    const user = await prisma.users.create({
      data,
    });
    const profile = await prisma.profile.create({
      data: { user_id: user.id, username: user.username, email: user.email },
    });

    results.success = profile;
    return results;
  } catch (error: any) {
    results.error = error;
    return results;
  }
};
