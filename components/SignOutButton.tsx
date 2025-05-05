import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function SignOutButton() {
  return (
    <button className='py-3 px-5 hover:bg-stone-100 hover:text-stone-950 transition-colors flex items-center gap-4 font-semibold text-stone-700 w-full cursor-pointer'>
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-stone-700' />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
