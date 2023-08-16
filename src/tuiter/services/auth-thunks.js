// import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as authService from "./auth-service";
//
//
// export const loginThunk = createAsyncThunk(
//     "user/login", async (credentials) => {
//         const user = await authService.login(credentials);
//         return user;
//     }
// );
//
// export const registerThunk = createAsyncThunk(
//     "user/register", async (credentials) => {
//         console.log("register thunk ", credentials);
//         const user = await authService.register(credentials);
//         return user;
//     }
// );
//
// export const profileThunk = createAsyncThunk(
//     "auth/profile", async () => {
//         console.log("profile thunk");
//         const response = authService.profile();
//         return response.data;
//     });
//
// export const logoutThunk = createAsyncThunk(
//     "auth/logout", async () => {
//         return await authService.logout();
//     });
//
// export const updateUserThunk = createAsyncThunk(
//     "user/updateUser", async (user) => {
//         await authService.updateUser(user);
//         return user;
//     });

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
        console.log("register thunk ", credentials);
        const user = await authService.register(credentials);
        return user;
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });

export const updateUserThunk = createAsyncThunk(
    "user/updateUser",
    async (user) => {
        await authService.updateUser(user);
        return user;
    }
);

export const profileThunk = createAsyncThunk("auth/profile", async () => {
    return await authService.profile();
});