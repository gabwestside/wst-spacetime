interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  return (
    <h1>{props.title}</h1>
  )
}
