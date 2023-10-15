import { ErrorModel } from "src/app/shared/models/error.model";
import { UserModel } from "./models/user.model";

export const authFeatureName = 'AUTH';

export interface AuthState {
    user?: Partial<UserModel>;
    name?: string;
    error?: ErrorModel;
}

export const initialAuthState: AuthState = {
    user: undefined,
    name: undefined,
    error: undefined,
}