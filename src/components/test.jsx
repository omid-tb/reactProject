import { useForm } from "react-hook-form"

export default function Test() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
  type="number"
  {...register("test", {
    min: {
      value: 3,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }
  })}
/>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  )
}