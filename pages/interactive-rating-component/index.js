import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import RadioScoreOption from '@/components/interactive-rating/RadioScoreOption';

export default function Home() {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!rating) {
      return null;
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-very-dark-blue font-overpass font-normal">
      <Head></Head>

      {!isSubmitted && (
        <main>
          <form
            className="mx-8 max-w-[375px] rounded-2xl bg-dark-blue/50 p-8 text-[15px] text-medium-grey"
            onSubmit={handleSubmit}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medium-grey/10">
              <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                  fill="#FC7614"
                />
              </svg>
            </div>
            <h1 className="mt-4 mb-4 text-2xl text-white"> How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All feedback is appreciated to help us improved
              our offering!
            </p>
            <RadioGroup value={rating} onChange={setRating} className="mt-6 flex gap-4">
              {[1, 2, 3, 4, 5].map((elem) => (
                <RadioScoreOption value={elem} key={elem} />
              ))}
            </RadioGroup>
            <button
              className="mt-6 w-full rounded-full bg-orange py-3 tracking-widest text-white hover:bg-white hover:text-orange"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </main>
      )}

      {isSubmitted && (
        <main className="mx-8 flex max-w-[375px] flex-col items-center rounded-2xl bg-dark-blue/50 p-8 text-center text-[15px] text-medium-grey">
          <Image
            src="/images/illustration-thank-you.svg"
            width={162}
            height={108}
            alt="Thank you for rating our services"
          />

          <p className="my-6 rounded-full bg-medium-grey/10 px-6 py-2 text-lg text-orange">
            You selected {rating} out of 5
          </p>

          <h1 className="text-3xl font-bold text-white">Thank you!</h1>
          <p className="mt-6">
            We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to
            get in touch!
          </p>
        </main>
      )}
    </div>
  );
}
