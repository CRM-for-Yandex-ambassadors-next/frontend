import { mainApi } from '../../redux/mainApi';
import { LoginFormData } from './types';

const loginApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<void, LoginFormData>({
      query: (body) => ({
        url: '/authorize',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation } = loginApi;