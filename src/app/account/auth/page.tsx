import { NextPage } from "next";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginForm from "@/components/forms/loginForm";
import RegisterForm from "@/components/forms/registerForm";

//import { useSearchParams } from "next/navigation";

interface Props {}

const authLinks = [
  {
    img: { src: "/facebook_icon.png", alt: "facebook_icon" },
    p: "Продовжити через Facebok",
  },
  {
    img: { src: "/apple_icon.png", alt: "apple_icon" },
    p: "Продовжити через Apple",
  },
  {
    img: { src: "/google_icon.png", alt: "google_icon" },
    p: "Продовжити через Google",
  },
];

const Auth: NextPage<Props> = ({}) => {
  //const searchParams = useSearchParams(); // ?login /?register
  return (
    <>
      <main className="bg-white rounded flex-col w-[400px] p-6">
        <div className="text-base font-bold text-center flex flex-col justify-between gap-[14px]">
          {authLinks.map((item) => {
            return (
              <>
                <button className="flex flex-row h-[52px] justify-center items-center border w-full  border-black text-black rounded hover:border-2 px-[36px] py-[13px]">
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    width="26"
                    height="26"
                    className="mx-3"
                  />
                  <p>{item.p}</p>
                </button>
              </>
            );
          })}
        </div>

        <div className="mt-[28px] divider before:bg-black after:bg-black">
          Чи
        </div>
        <Tabs defaultValue="login">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger
              value="login"
              className="hover:border-primary-focus hover:text-primary-focus  data-[state=active]:border-primary-focus  data-[state=active]:text-primary-focus"
            >
              Увійти
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="hover:border-primary-focus hover:text-primary-focus  data-[state=active]:border-primary-focus  data-[state=active]:text-primary-focus"
            >
              Зареєструватися
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
        <div></div>
      </main>
    </>
  );
};

export default Auth;
