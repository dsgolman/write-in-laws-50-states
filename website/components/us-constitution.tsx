import React from 'react';

export function USConstitution() {
  return (
    <section className="relative py-16 bg-[#f8f6f0] text-[#2c2c2c]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#8B4513] font-serif">
              The Constitution of the United States
            </h1>
            <p className="text-lg text-[#666] italic">
              Established September 17, 1787
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none font-serif leading-relaxed">
            {/* Preamble */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#8B4513] mb-6">Preamble</h2>
              <p className="text-xl italic text-justify leading-relaxed">
                We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.
              </p>
            </div>

            {/* Article I */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Article I - The Legislative Branch</h2>
              
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 1</h3>
              <p className="mb-4 text-justify">
                All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.
              </p>

              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 2</h3>
              <p className="mb-4 text-justify">
                The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.
              </p>
              <p className="mb-4 text-justify">
                No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen.
              </p>

              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 3</h3>
              <p className="mb-4 text-justify">
                The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote.
              </p>

              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 8</h3>
              <p className="mb-4 text-justify">
                The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises shall be uniform throughout the United States;
              </p>
              <p className="mb-4 text-justify">
                To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes;
              </p>
              <p className="mb-4 text-justify">
                To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States;
              </p>
              <p className="mb-4 text-justify">
                To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures;
              </p>
            </div>

            {/* Article II */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Article II - The Executive Branch</h2>
              
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 1</h3>
              <p className="mb-4 text-justify">
                The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected, as follows:
              </p>

              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 2</h3>
              <p className="mb-4 text-justify">
                The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States;
              </p>

              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 3</h3>
              <p className="mb-4 text-justify">
                He shall from time to time give to the Congress Information of the State of the Union, and recommend to their Consideration such Measures as he shall judge necessary and expedient;
              </p>
            </div>

            {/* Article III */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Article III - The Judicial Branch</h2>
              
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 1</h3>
              <p className="mb-4 text-justify">
                The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall, at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office.
              </p>

              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Section 2</h3>
              <p className="mb-4 text-justify">
                The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority;
              </p>
            </div>

            {/* Articles IV-VII (abbreviated for space) */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Article IV - Relations Between States</h2>
              <p className="mb-4 text-justify">
                Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Article V - Amendment Process</h2>
              <p className="mb-4 text-justify">
                The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Article VI - Federal Power</h2>
              <p className="mb-4 text-justify">
                This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Article VII - Ratification</h2>
              <p className="mb-4 text-justify">
                The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.
              </p>
            </div>

            {/* Amendments */}
            <div className="border-t-2 border-[#8B4513] pt-12">
              <h2 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">Amendments to the Constitution</h2>

              {/* Bill of Rights */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The Bill of Rights (Amendments I-X)</h3>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment I</h4>
                  <p className="text-justify">
                    Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment II</h4>
                  <p className="text-justify">
                    A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment III</h4>
                  <p className="text-justify">
                    No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment IV</h4>
                  <p className="text-justify">
                    The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment V</h4>
                  <p className="text-justify">
                    No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment VI</h4>
                  <p className="text-justify">
                    In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment VII</h4>
                  <p className="text-justify">
                    In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment VIII</h4>
                  <p className="text-justify">
                    Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment IX</h4>
                  <p className="text-justify">
                    The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment X</h4>
                  <p className="text-justify">
                    The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.
                  </p>
                </div>
              </div>

              {/* Additional Amendments (abbreviated for space) */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Additional Amendments (XI-XXVII)</h3>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment XIII (1865)</h4>
                  <p className="text-justify">
                    Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment XIV (1868)</h4>
                  <p className="text-justify">
                    All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment XV (1870)</h4>
                  <p className="text-justify">
                    The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment XIX (1920)</h4>
                  <p className="text-justify">
                    The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment XXII (1951)</h4>
                  <p className="text-justify">
                    No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of the President more than once.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment XXVI (1971)</h4>
                  <p className="text-justify">
                    The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Amendment XXVII (1992)</h4>
                  <p className="text-justify">
                    No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center border-t-2 border-[#8B4513] pt-8">
              <p className="text-lg font-bold text-[#8B4513] mb-2">
                Done in Convention by the Unanimous Consent of the States present
              </p>
              <p className="text-base italic">
                the Seventeenth Day of September in the Year of our Lord one thousand seven hundred and Eighty seven
              </p>
              <p className="text-base italic mt-2">
                and of the Independence of the United States of America the Twelfth
              </p>
              <p className="text-base font-semibold mt-4">
                In witness whereof We have hereunto subscribed our Names
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default USConstitution;