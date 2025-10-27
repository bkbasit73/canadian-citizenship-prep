import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SignupForm } from '@/components/auth/SignupForm';
import { MapleLeafIcon } from '@/components/icons/MapleLeafIcon';

export default function SignupPage() {
  const loginImage = PlaceHolderImages.find((img) => img.id === 'login-hero');

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
       <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex justify-center items-center gap-2">
                <MapleLeafIcon className="h-8 w-8 text-red-500" />
                <h1 className="text-3xl font-bold">Sign Up</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Create an account to start your journey
            </p>
          </div>
          <SignupForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={loginImage?.imageUrl || '/placeholder.svg'}
          alt={loginImage?.description || 'A beautiful landscape'}
          width={1280}
          height={853}
          data-ai-hint={loginImage?.imageHint}
          className="h-full w-full object-cover"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <Link href="/" className="flex items-center gap-3 text-foreground">
            <MapleLeafIcon className="h-10 w-10 text-red-500" />
            <span className="text-3xl font-bold tracking-tighter">
              Canadian Citizenship Challenge
            </span>
          </Link>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Your journey to Canadian citizenship starts here. Master the test
            with our interactive quizzes and study guides.
          </p>
        </div>
      </div>
    </div>
  );
}
