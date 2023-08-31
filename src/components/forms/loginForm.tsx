"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import SmartField from "../smartField";
import { useRouter } from "next/navigation";

import { cookies } from "next/headers";

const schema = yup
  .object({
    login: yup
      .string()
      .min(6, "login must be longer then 6 characters")
      .required("Required"),
    password: yup
      .string()
      .min(9, "password must be longer then 9 characters")
      .matches(
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"),
        "You need to use 1 number, 1 uppercase and 1 lovercase"
      )
      .max(20, "password must be shorter then 20 characters")
      .required("Required"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function LoginForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    //event.preventDefault();
    // do something with the form data
    console.log(JSON.stringify({ ...data }));

    const rawResponse = await fetch("http://localhost/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ ...data }),
    });
    const content = await rawResponse.json();

    console.log(content);

    if (rawResponse.status === 200) {
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col w-full">
        <div className="mb-6">
          <Controller
            name="login"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <>
                <SmartField
                  id="login"
                  type="text"
                  className="rounded-md border border-primary-focus outline-primary-focus p-[14px] w-full h-[50px] mt-[8px]"
                  name={name}
                  value={value}
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched
                  ref={ref} // wire up the input ref
                  label={
                    <label htmlFor={name} className="text-base font-normal">
                      {"Електронна пошта чи кабінет"}
                    </label>
                  }
                  error={error}
                  register={register}
                />
              </>
            )}
          />
        </div>
        <div className="mb-[28px]">
          <Controller
            name="password"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <>
                <SmartField
                  id="password"
                  type="password"
                  className="rounded-md border border-primary-focus outline-primary-focus p-[14px] w-full h-[50px]"
                  name={name}
                  value={value}
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched
                  ref={ref} // wire up the input ref
                  label={
                    <label htmlFor={name} className="text-base font-normal">
                      {"Пароль"}
                    </label>
                  }
                  error={error}
                  register={register}
                />
              </>
            )}
          />
        </div>
        <Link href="#" className="mb-[38px]">
          Забули пароль ?
        </Link>

        <button
          disabled={!isValid}
          className="py-[15px] mb-[14px] text-base font-bold rounded-md text-white bg-primary hover:bg-primary-focus  disabled:bg-neutral-400   disabled:text-stone-500 "
          type="submit"
        >
          Увійти
        </button>
        <div className="text-xs font-normal text-center text-black">
          Під час входу ви погоджуєтеся з нашими
          <br />
          Умови користування
        </div>
      </div>
    </form>
  );
}
