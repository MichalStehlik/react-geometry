import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"

export const Circle = () => {
    let { radius } = useParams();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [area, setArea] = useState(0);
    useEffect(()=>{
        if(radius) setValue("radius",radius);
    },[radius, setValue]);
    const onSubmit = data => {
        setArea(data.radius * Math.pow(Math.PI,2));
    };
    return (
        <>
            <h1>Circle</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>r</label>
                    <input {...register("radius", { required: true, min: 0 })} defaultValue={radius} />
                    {errors.radius && <span>Radius must be provided!</span>}
                </div>
                <input type="submit" />
                <button onClick={e => {setValue("radius",3)}}>3</button>
                <p>Area: {area}</p>
            </form>
        </>
    )
}

export default Circle;