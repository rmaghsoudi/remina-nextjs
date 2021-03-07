import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

function getUser(id) {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

function getTodos(userId) {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/todos?${new URLSearchParams({ user_id: userId })}`, fetcher)

  return {
    todos: data,
    isLoading: !error && !data,
    isError: error
  }
}

export { getUser, getTodos }