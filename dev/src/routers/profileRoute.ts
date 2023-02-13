import profileController from "../controller/profileController";
import Authentication from "../middleware/authentication";
import BaseRoute from "./baseRoutes";

class ProfileRoute extends BaseRoute {
  routes(): void {
    this.router.get(
      "/get-profile",
      Authentication.authentication,
      profileController.getProfile
    );
    this.router.put(
      "/edit-profile",
      Authentication.authentication,
      profileController.editProfile
    );
  }
}

export default new ProfileRoute().router;
