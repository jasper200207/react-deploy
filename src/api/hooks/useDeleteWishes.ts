import type { UseAxiosMutationResult } from '@/api';
import { useAxiosMutation } from '@/api';
import { sessionStorageApiWithAuth } from '@/api/axiosInstance';
import type { DeleteWishesRequestBody } from '@/api/type';
import { authSessionStorage } from '@/utils/storage';

export function getDeleteWishesPath(props?: DeleteWishesRequestBody | undefined): string {
  return `/api/wishes/${props?.wishId ?? ':wishId'}`;
}

function useDeleteWishes(): UseAxiosMutationResult<void, DeleteWishesRequestBody> {
  const token = authSessionStorage.get()?.token ?? '';

  return useAxiosMutation<void, DeleteWishesRequestBody>(
    {
      method: 'DELETE',
    },
    sessionStorageApiWithAuth(token),
    [['wishes']],
    getDeleteWishesPath,
  );
}

export default useDeleteWishes;
