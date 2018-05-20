import {LoginComponent} from "./login.component";
import {PATH} from "../shared/constants/path.constant";
import {RegisterComponent} from "./register.component";

export const userRoutes = [
  { path: PATH.LOGIN, component: LoginComponent },
  { path: PATH.REGISTER, component: RegisterComponent}
];
