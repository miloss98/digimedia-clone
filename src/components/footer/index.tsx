const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 h-48 w-full bg-gradient-to-r from-pink to-purple bg-no-repeat bg-center bg-cover'>
      <p className='w-3/4 text-white text-sm text-center mb-4 md:w-full md:text-lg'>
        Copyright © 2022 DigiMedia Co., Ltd. All Rights Reserved.{" "}
      </p>
      <p className='text-white text-xs font-semibold md:text-md'>
        Design:
        <a
          href='https://templatemo.com/'
          target='_blank'
          className='text-github text-center  pl-1'
        >
          TemplateMo
        </a>
      </p>
    </div>
  );
};

export default Footer;
