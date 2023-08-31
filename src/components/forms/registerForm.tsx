"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SmartField from "../smartField";
import { useRouter } from "next/navigation";

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

export default function RegisterForm() {
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

    const rawResponse = await fetch("http://localhost/api/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: data.login, password: data.password }),
    });
    const content = await rawResponse.json();

    console.log(content);
    /*
    await fetch("http://localhost/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: data.login, password: data.password }),
    });
*/
    // /api/auth/register
    router.refresh();
  };

  return (
    <>
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

          <div className="text-xs mb-6 font-normal text-center text-black">
            Створюючи профіль на iBiz, ви погоджуєтесь з <br />
            <span className="text-xs font-bold">Умовами використання</span>
          </div>

          <div className="inline-flex items-center mb-6">
            <input
              type="checkbox"
              name="news"
              id="news"
              className="checkbox rounded border-primary-focus border-2 mr-[14px]"
            />
            <div className="text-xs font-normal  text-black">
              Так, я хочу отримувати інформацію про новини
              <br />
              та акції IBiz
            </div>
          </div>

          <button
            disabled={!isValid}
            className="py-[15px] mb-[14px] text-base font-bold rounded-md text-white bg-primary hover:bg-primary-focus  disabled:bg-neutral-400   disabled:text-stone-500 "
            type="submit"
          >
            Зареєструватися
          </button>
        </div>
      </form>
    </>
  );
}
