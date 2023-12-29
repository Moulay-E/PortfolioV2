import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" w-screen h-screen relative ">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/main-bg.webp)' }}
      >
        <div className="text-left pb-56 md:pb-20 md:pl-8   flex flex-col gap-5 z-[11] max-w-[750px] ">
          <h1 className="sm:w-[60%] md:w-full ml-4 text-4xl md:text-5xl lg:text-[50px] text-white font-semibold">
            Créez l'avenir avec le
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">
              {' '}
              développement web
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Explorez mon parcours et mes
            <Link
              href={'/my-skills'}
              className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 "
            >
              {' '}
              réalisations
            </Link>{' '}
            en développement web.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse2.gif"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" height={480} width={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full ">
        <Image
          src="/trees.webp"
          alt="trees"
          height={2000}
          width={2000}
          className=" w-full h-full"
        />
      </div>
      <Image
        src="/main-bg.webp"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[0] w-full h-full"
      />
    </main>
  );
}
