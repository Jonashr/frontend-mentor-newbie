import FAQDisclosure from '@/components/faq-accordion-card/FAQDisclosure';
import Image from 'next/image';

const questionAndAnswers = [
  {
    question: 'How many team members can I invite ?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    question: 'How do I reset my password?',
    answer:
      ' Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. ',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked. ',
  },
  {
    question: 'Do you provide additional support?',
    answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

export default function FAQAccordionCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#af67e9] to-[#6565e7] font-kumbhsans font-normal">
      <main className="relative my-32 w-full max-w-[375px] rounded-2xl bg-white py-16 px-8 text-xs">
        <div className="absolute -top-24 left-1/2 w-[237px] -translate-x-1/2 ">
          <Image
            src="/images/illustration-woman-online-mobile.svg"
            width="237"
            height="180"
            alt="lol"
            className="z-30"
          />
        </div>
        <h1 className="text-soft-blue mt-16 text-center text-3xl font-bold">FAQ</h1>
        <ul className="mt-8 flex flex-col divide-y divide-[#e7e7e9] border-b border-[#e7e7e9]">
          {questionAndAnswers.map((qa) => (
            <FAQDisclosure question={qa.question} answer={qa.answer} key={qa.question} />
          ))}
        </ul>
      </main>
    </div>
  );
}
