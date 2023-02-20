import { formatTime } from "@/utilities/date-formatter"
import { useEffect, useState } from "react"

type HomeIndexProps = {
  currentTime: string
}

type Person = {
  name: string
}

export default function HomeIndexPage({ currentTime }: HomeIndexProps): JSX.Element {
  const [person, setPerson] = useState<Person>({ name: '' })

  useEffect(() => {
    fetch('/api/hello')
      .then(async (response) => {
        const per = await response.json()

        setPerson(per)
      })
  }, [])

  return (
    <>
      <h1>Welcome to the home page</h1>
      <p>Current server time {formatTime(currentTime)}</p>
      {person.name && <p>Hello: {person.name}</p>}
    </>
  )
}

// by exporting this, this page will be rendered every time
// the home page is visited
export function getServerSideProps() {
  const currentTime = (new Date()).toISOString()

  console.log(`getServerSideProps for HomeIndexPage: ${currentTime}`)

  return {
    props: {
      currentTime,
    }
  }
}