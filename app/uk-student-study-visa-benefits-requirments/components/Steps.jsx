import React from 'react';

export const benefits = [
  {
    id: "0",
    title: "Apply to the UK university that you have selected to study there.",
    text: "A good score in any test for English, like IELTS, is required, but at the same time, there are some options of UK Study Visa Without IELTS.",
  },
  {
    id: "1",
    title: "Once accepted by the university, they will offer you unconditional place if you have met all the requirements academically.",
    text: "You could look up detailed guidelines related to the UK Study Visa, together with an outline of what can be estimated in regard to UK Student Visa Processing Time.",
  },
  {
    id: "2",
    title: "Once you accept your offer, you are going to receive from your university a Certificate of Acceptance of Studies.",
    text: "Particular academic and language criteria have to be fulfilled to look for admission to universities in the UK.",
  },
  {
    id: "5",
    title: "This CAS is a critical component as part of your UK Study Visa Application with the CAS on hand, you can now begin applying for the UK student visa.",
    text: "The first source will come from National Health Service. Otherwise, students may resort to private sources of medical care insurance coverage.",
  },
  {
    id: "3",
    title: "You can apply for UK Student Visa up to six months before your course starts.",
    text: "All the funding sources available, like scholarships, to get funded by.",
  },
  {
    id: "4",
    title: "Finally, submit your application with all mandatory documents accompanying it, such as UK Student Visa Documents Checklist, and service charges.",
    text: "A personal statement detailing aims on academics of your career.",
  },
];

const StepByStepGuide = () => {
  return (
    <>
      <div className="mt-4">
        <div
          className="flex flex-col lg:flex-row justify-center items-center w-full h-[90rem] md:h-[40rem] lg:h-[40rem] tablet:h-[46rem] relative bg-cover bg-center"
          style={{
            backgroundImage: `url('/ukstudentvisaapply.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white opacity-75"></div>

          {/* Content */}
          <section className="relative p-8 max-w-6xl mx-auto mb-4">
            <h2 className="text-[2.50rem] font-bold text-center text-black uppercase">
              <span className="text-saffron text-[2.70rem]">Step-By-Step Guide</span> <br /> to Applying for UK Study Visa
            </h2>

            <div className="bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200">
              {benefits.map((item, index) => (
                <div key={item.id} className="">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black text-left">{item.title}</h3>
                      <p className="text-gray-800 text-sm">{item.text}</p>
                    </div>
                  </div>
                  {/* Divider line - hidden for the last item */}
                  {index < benefits.length - 1 && (
                    <hr className="my-3 border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default StepByStepGuide;
