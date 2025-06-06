import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/img/mainlogo.svg'; // Using the main logo from assets

const LogoDark = () => {
  return (
    <Link href='/' className='block h-8 w-auto md:h-9'>
      <Image 
        src={logo} 
        alt='Cogni AI Solutions' 
        width={0}
        height={0}
        sizes='100vw'
        className='h-full w-auto max-w-[130px] object-contain object-left transition-all duration-300 hover:opacity-90'
        priority
      />
    </Link>
  );
};

export default LogoDark;
