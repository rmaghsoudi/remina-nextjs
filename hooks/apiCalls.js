import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

export default function getUser (id) {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}