import { Card } from 'antd';

const LoginPage = () => {
  return (
    <div>
      <img src="/src/assets/bg.jpg" className="absolute right-0" alt="" />

      <div className="w-full h-screen flex items-center ">
        <div className="flex flex-col ml-12">
          <div className="w-full flex items-center justify-center mb-6 cursor-pointer">
            <img
              src="/src/assets/login-logo.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div>
            <Card className="p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-y-4">
                <div className=" text-2xl text-[##393939]">Welcome to</div>
                <div className="font-semibold text-2xl italic mb-12 ">
                  BP Finance Check System
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-y-6">
                    <div className="self-end ">
                      <img
                        src="https://pdp-webapp.alio.wang/static/loginButtonIconInternal.3bb1eb36.webp"
                        width={64}
                      />
                    </div>
                    <div className="flex gap-x-2 cursor-pointer">
                      西门子用户登录
                      <div>{'>'}</div>
                    </div>
                  </div>

                  <div className="h-36 w-px bg-gray-300"></div>
                  <div className="flex flex-col gap-y-6">
                    <div className="self-end">
                      <img
                        src="https://pdp-webapp.alio.wang/static/loginButtonIconSupplier.ec52d369.webp"
                        width={64}
                      />
                    </div>
                    <div className="flex gap-x-2 cursor-pointer">
                      BP 用户登录
                      <div>{'>'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
