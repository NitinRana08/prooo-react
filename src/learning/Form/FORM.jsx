import { useForm } from "react-hook-form"


function FORM() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="username"{...register("username", { required: true, minLength: {value :3, message: "min length should be 3"}, maxLength: {value : 8, message:"username shound under 8 "} })} type="text" />
                    {errors.username && <span>{errors.username.message}</span>}
                    <input placeholder="password" {...register("password")} type="password"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>


        </>
    )
}
export default FORM