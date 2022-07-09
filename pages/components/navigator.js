import Link from "next/link";

const Navigator = () => {
  return (
    <>
      <div>
        <ul class="flex flex-row-reverse gap-20 bg-current px-5">
          <li>
            <Link href="/services">
              <a class="text-white">Services</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a class="text-white">About</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a class="text-white">Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigator;
