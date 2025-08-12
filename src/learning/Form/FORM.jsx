import { useForm } from "react-hook-form";

function FORM() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();




    const onSubmit = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(data);
                resolve();
            }, 2000); // simulating async work
        });
    };




    
    return (
        <>
            {isSubmitting && <div>loading...</div>}
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="username"
                        {...register("username", {
                            required: { value: true, message: "You left it empty!" },
                            minLength: { value: 3, message: "Min length should be 3" },
                            maxLength: { value: 8, message: "Username should be under 8 characters" }
                        })}
                        type="text"
                    />
                    {errors.username && <span>{errors.username.message}</span>}

                    <input
                        placeholder="password"
                        {...register("password", { required: "Password is required" })}
                        type="password"
                    />
                    {errors.password && <span>{errors.password.message}</span>}

                    <input type="submit" value="Submit" disabled={isSubmitting} />
                </form>
            </div>
        </>
    );
}

export default FORM;
