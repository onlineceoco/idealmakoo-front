import Link from "next/link";
import Head from "next/head";
const Login = () => {
  return (
    <>
      <Head>
        <title>IdealMakoo</title>
      </Head>
      <div className="login-wrapper">
        {/* <video autoPlay loop muted src={'./videos/log.mp4'} type="video/mp4"></video> */}
        <div className="center">
          <Link href="/">
            <img src="./images/99.png" alt="idealmakoo" />
          </Link>
          <h1>ورود / ثبت نام</h1>
          <form method="post">
            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>شماره موبایل خود را وارد کنید</label>
            </div>

            <input type="submit" value="ثبت و عبور" />
            <div className="signup_link">
              <h4>
                با ورود و ثبت نام در پلتفرم ایده آل ماکو, قوانین و حریم خصوصی آن
                را می‌پذیرید{" "}
              </h4>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
