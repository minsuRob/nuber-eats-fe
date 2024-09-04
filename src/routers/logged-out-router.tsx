import React from "react";
import { useForm } from "react-hook-form";

export const LoggedOutRouter = () => {
  const { register, watch, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    console.log(watch());
  };
  const onInvalid = () => {
    console.log("cant create account");
  };
  console.log(errors);
  return (
    <div>
      <h1>Logged Out</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="email"
            ref={register({
              required: "This is required",
              pattern: /^[A-Za-z0-9._%+-]+@gmail.com$/,
            })}
          />
        </div>
        <div>
          <input
            ref={register({ required: true })}
            name="password"
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button className="">Submit</button>
      </form>
    </div>
  );
};
