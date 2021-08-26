// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findEmployees GET /api/employee/ */
export async function findEmployeesUsingGET(options?: { [key: string]: any }) {
  return request<API.IterableEmployee_>('/api/employee/', {
    method: 'GET',
    ...(options || {}),
  });
}

/** findById GET /api/employee/${param0} */
export async function findByIdUsingGET(
  params: {
    // path
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Employee>(`/api/employee/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateBook PUT /api/employee/${param0} */
export async function updateBookUsingPUT(
  params: {
    // path
    /** id */
    id: string;
  },
  body: API.Employee,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Employee>(`/api/employee/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
