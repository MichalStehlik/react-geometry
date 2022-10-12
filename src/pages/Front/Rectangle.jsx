import { useState } from "react";
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"

export const Rectangle = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("a"));
    const [area, setArea] = useState(0);
    const onSubmit = data => {
        setArea(Number(data.sideA) * Number(data.sideB));
        setSearchParams({a: data.sideA, b: data.sideB});
    };

    return (
        <>
            <h1>Rectangle</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>a</label>
                    <input {...register("sideA", { required: true })} />
                    {errors.sideA && <span>Length of side "a" must be provided!</span>}
                </div>
                <div>
                    <label>b</label>
                    <input {...register("sideB", { required: true })} />
                    {errors.sideB && <span>Length of side "b" must be provided!</span>}
                </div>
                <input type="submit" />
                <p>Area: {area}</p>
            </form>
        </>
    )
}

export default Rectangle;