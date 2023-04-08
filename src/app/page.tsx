import RocketAniamtion from '../components/rocketanimation';
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center space-y-5 px-20 text-sm xmd:flex-row xmd:px-5 xmd:text-base md:px-20'>
      <p className='min-w-[300px] p-5 text-justify text-gray-50 xmd:min-w-[200px] md:min-w-[350px]'>
        Experience the captivating fusion of Rive and Next.js. See for yourself how Rive&#39;s versatile technology can bring design to life with fluid, lifelike movements and dynamic visuals.
        Rive and Next.js have joined forces to create an unparalleled user experience, seamlessly blending captivating design with powerful functionality. With Rive&#39;s versatile technology, your designs can come to life with fluid, lifelike movements and dynamic visuals, allowing you to create immersive and engaging user interfaces that capture your audience&#39;s attention.
        By integrating Rive with Next.js, you can take your web development to the next level. With Rive&#39;s intuitive design tools, you can create complex animations and interactions that would normally require extensive coding, and with Next.js, you can build powerful server-side rendered applications that deliver lightning-fast performance and seamless user experiences.
        Whether you&#39;re building a simple website or a complex web application, Rive and Next.js make it easy to create stunning, interactive designs that elevate your brand and captivate your audience. So why wait? Experience the captivating fusion of Rive and Next.js for yourself and take your web development to new heights.
      </p>
      <div className='flex-grow'>
        <RocketAniamtion></RocketAniamtion>
        <br></br>
      </div>
    </div>
  )
}