import type { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type GetUserParams = {
  /**
   * ユーザーID
   */
  id: number
}

/**
 * ユーザーAPI（個別取得）
 * @paramcontextAPIコンテキスト
 * @paramparamsパラメータ
 * @returnsユーザー
 */

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
  //ユーザーAPI
  //サンプルレスポンス
  {
    "id": "1",
    "username": "taketo",
    "displayName": "TaketoYoshida",
    "email": "taketo@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
  */

  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    },
  )
}

export default getUser
