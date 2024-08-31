"use client";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [kg, setKg] = useState(0);
  const [cm, setCm] = useState(0);
  const [st, setSt] = useState(0);
  const [lbs, setLbs] = useState(0);
  const [ft, setFt] = useState(0);
  const [inc, setInc] = useState(0);
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(0);
  const [healtyWeight, setHealtyWeight] = useState("");
  const [message, setMessage] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");

  useEffect(() => {
    if (unit === "metric" && cm > 0 && kg > 0) {
      setBmi(kg / ((cm / 100) * (cm / 100)));
      setMinWeight((18.5 * (cm / 100) * (cm / 100)).toFixed(1).toString());
      setMaxWeight((25 * (cm / 100) * (cm / 100)).toFixed(1).toString());
      console.log("bmi-metric", bmi.toFixed(1));
    } else if (unit === "imperial" && lbs > 0) {
      setBmi(((st * 14 + lbs) * 703) / ((ft * 12 + inc) * (ft * 12 + inc)));
      console.log("bmi-imperial", bmi);
    }
    if (bmi < 18.5) {
      setHealtyWeight("underweight");
      setMessage(
        `Your BMI suggests you’re a ${healtyWeight} weight. Your ideal weight is between`
      );
    } else if (bmi < 25) {
      setHealtyWeight("normal");
      setMessage(
        `Your BMI suggests you’re a ${healtyWeight} weight. Your ideal weight is between`
      );
    } else if (bmi < 30) {
      setHealtyWeight("overweight");
      setMessage(
        `Your BMI suggests you’re a ${healtyWeight} weight. Your ideal weight is between`
      );
    } else {
      setMessage(
        `Your BMI suggests you’re a ${healtyWeight} weight. Your ideal weight is between`
      );
    }
  }, [kg, cm, ft, inc, lbs, st, unit]);

  return (
    <>
      <main
        aria-labelledby="title"
        aria-describedby="description"
        className="w-full lg:w-[978px] h-[640px] p-6 lg:px-[140px] lg:pt-[75px] lg:pb-[196px] lg:ml-6 first-line:flex flex-col items-center lg:items-start rounded-bl-[35px] rounded-br-[35px] bg-[linear-gradient(-45deg,_rgba(214,230,254,.5)_0%,_rgba(214,252,254,0)_100%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
      >
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width="40"
          height="40"
          className="mt-8 mb-6 lg:m-0 lg:mb-[131px]"
        />
        <h1
          className="text-5xl text-center lg:text-left lg:w-[564px] font-semibold leading-[110%] tracking-tight mb-6"
          id="title"
        >
          Body Mass Index Calculator
        </h1>
        <p
          className="body-md text-[var(--dark-electric-blue)] text-center lg:text-left lg:w-[564px]"
          id="description"
        >
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </main>

      <section
        className="rounded-xlp-6 w-[calc(100%-32px)] sm:w-[calc(100%-80px)] lg:w-[564px]  absolute top-[510px] sm:top-80 lg:top-[82px] left-4 sm:left-10 lg:left-[738px]  bg-white shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] p-6 rounded-2xl"
        aria-labelledby="details"
      >
        <h2
          id="details"
          className="heading-md text-center sm:text-left font-semibold"
        >
          Enter your details below
        </h2>
        <form>
          <div className="flex justify-around sm:justify-start mt-6">
            <div className="py-[3.5px] flex items-center gap-[18px] relative sm:w-full">
              <input
                type="radio"
                value="metric"
                id="metric"
                name="unitType"
                className="peer appearance-none w-[31px] h-[31px] rounded-full border border-[var(--dark-electric-blue)] checked:bg-[#345FF6] checked:bg-opacity-15 checked:border-none checked:border-white transition-all duration-300 cursor-pointer"
                checked={unit === "metric"}
                onChange={() => {
                  setUnit("metric");
                  setBmi(0);
                }}
              />
              <div className="absolute top-0 left-0 translate-x-1/2 translate-y-3 w-[15px] h-[15px] rounded-full peer-checked:bg-[var(--blue)] transition-colors duration-300" />
              <label
                htmlFor="metric"
                className="body-md font-bold text-[var(--gun-metal)] cursor-pointer"
              >
                Metric
              </label>
            </div>
            <div className="py-[3.5px] flex items-center gap-[18px] relative sm:w-full">
              <input
                type="radio"
                value="imperial"
                id="imperial"
                name="unitType"
                className="peer appearance-none w-[31px] h-[31px] rounded-full border border-[var(--dark-electric-blue)] checked:bg-[#345FF6] checked:bg-opacity-15 checked:border-none checked:border-white transition-all duration-300 cursor-pointer"
                checked={unit === "imperial"}
                onChange={() => {
                  setUnit("imperial");
                  setBmi(0);
                }}
              />
              <div className="absolute top-0 left-0 translate-x-1/2 translate-y-3 w-[15px] h-[15px] rounded-full peer-checked:bg-[var(--blue)] transition-colors duration-300" />
              <label
                htmlFor="imperial"
                className="body-md font-bold text-[var(--gun-metal)] cursor-pointer"
              >
                Imperial
              </label>
            </div>
          </div>
          {unit === "metric" && (
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex flex-col mt-6 gap-2">
                <label className="text-[#5E6E85] text-[0.875rem] font-normal">
                  Height
                </label>
                <div className="py-5 px-6 border border-[var(--dark-electric-blue)] rounded-[12px] flex justify-between items-center w-full">
                  <input
                    type="number"
                    className="outline-none border-none text-[var(--gun-metal)] text-2xl font-semibold bg-transparent w-full"
                    value={cm}
                    onChange={(e) => setCm(e.target.valueAsNumber)}
                  />
                  <span className="heading-md text-[var(--blue)] font-bold">
                    cm
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-6 gap-2">
                <label className="text-[#5E6E85] text-[0.875rem] font-normal">
                  Weight
                </label>
                <div className="py-5 px-6 border border-[var(--dark-electric-blue)] rounded-[12px] flex justify-between items-center w-full">
                  <input
                    type="number"
                    className="outline-none border-none text-[var(--gun-metal)] text-2xl font-semibold bg-transparent w-full"
                    value={kg}
                    onChange={(e) => setKg(e.target.valueAsNumber)}
                  />
                  <span className="heading-md text-[var(--blue)] font-bold">
                    kg
                  </span>
                </div>
              </div>
            </div>
          )}
          {unit === "imperial" && (
            <div className="flex flex-col  gap-6 sm:gap-8 lg:flex-col">
              <div className="flex flex-col sm:flex-row mt-6 gap-2">
                <label className="text-[#5E6E85] text-[0.875rem] font-normal">
                  Height
                </label>
                <div className="flex flex-row gap-4 lg:flex-row lg:gap-6">
                  <div className="py-5 px-6 border border-[var(--dark-electric-blue)] rounded-[12px] flex justify-between items-center w-full">
                    <input
                      type="number"
                      className="outline-none border-none text-[var(--gun-metal)] text-2xl font-semibold bg-transparent w-full"
                      value={ft}
                      onChange={(e) => setFt(e.target.valueAsNumber)}
                    />
                    <span className="heading-md text-[var(--blue)] font-bold">
                      ft
                    </span>
                  </div>
                  <div className="py-5 px-6 border border-[var(--dark-electric-blue)] rounded-[12px] flex justify-between items-center w-full">
                    <input
                      type="number"
                      className="outline-none border-none text-[var(--gun-metal)] text-2xl font-semibold bg-transparent w-full"
                      value={inc}
                      onChange={(e) => setInc(e.target.valueAsNumber)}
                    />
                    <span className="heading-md text-[var(--blue)] font-bold">
                      in
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <label className="text-[#5E6E85] text-[0.875rem] font-normal">
                  Weight
                </label>
                <div className="flex flex-row gap-4 lg:flex-row lg:gap-6">
                  <div className="py-5 px-6 border border-[var(--dark-electric-blue)] rounded-[12px] flex justify-between items-center w-full">
                    <input
                      type="number"
                      className="outline-none border-none text-[var(--gun-metal)] text-2xl font-semibold bg-transparent w-full"
                      value={st}
                      onChange={(e) => setSt(e.target.valueAsNumber)}
                    />
                    <span className="heading-md text-[var(--blue)] font-bold">
                      st
                    </span>
                  </div>
                  <div className="py-5 px-6 border border-[var(--dark-electric-blue)] rounded-[12px] flex justify-between items-center w-full">
                    <input
                      type="number"
                      className="outline-none border-none text-[var(--gun-metal)] text-2xl font-semibold bg-transparent w-full"
                      value={lbs}
                      onChange={(e) => setLbs(e.target.valueAsNumber)}
                    />
                    <span className="heading-md text-[var(--blue)] font-bold">
                      lbs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-tl-2xl rounded-bl-2xl sm:rounded-tr-full sm:rounded-br-full bg-[var(--blue)] flex flex-col sm:flex-row mt-6 items-center">
            {bmi === 0 && (
              <div className="flex flex-col w-full gap-4">
                <p className="heading-md text-[var(--pure-white)]">Welcome!</p>
                <p className="body-sm text-[var(--pure-white)]">
                  Enter your height and weight and you’ll see your BMI result
                  here
                </p>
              </div>
            )}
            {bmi !== 0 && (
              <div className="flex flex-col sm:flex-row sm:justify-between lg:flex-row lg:justify-between lg:items-center w-full">
                <div className="flex flex-col">
                  <p className="body-md font-bold text-[var(--pure-white)] mb-2">
                    Your BMI is...
                  </p>
                  <p className="text-5xl font-bold text-[var(--pure-white)] mb-6">
                    {bmi.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="body-sm text-[var(--pure-white)] w-52 sm:w-72">
                    {message} <strong>{minWeight}kgs</strong>&nbsp;-&nbsp;
                    <strong>{maxWeight}kgs</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>

      <section
        className="mt-[550px] sm:mt-40 lg:mt-16 flex flex-col lg:items-center lg:justify-between sm:flex-row lg:w-[1160px] lg:mx-auto"
        aria-labelledby="bmi-result-means-title"
        aria-describedby="bmi-result-means-description"
      >
        <div className="w-full sm:w-[calc(50%+80px)] lg:w-[564px] h-[355px] sm:h-[411px] lg:h-[533px] sm:-ml-20 lg:ml-0 relative">
          <Image
            src="/assets/images/image-man-eating.webp"
            alt="image about man eating"
            fill
            className="mx-auto sm:mx-0"
          />
        </div>
        <div className="pt-12 px-6 sm:w-1/2 lg:w-[465px]">
          <h2
            id="bmi-result-means-title"
            className="text-[2rem] font-semibold leading-[110%] mb-8"
          >
            What your BMI result means
          </h2>
          <p
            id="bmi-result-means-description"
            className="body-md text-[var(--dark-electric-blue)]"
          >
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </section>

      <section
        aria-label="necessities for healthy body mass"
        className="py-14 px-5 lg:px-28 bg-[linear-gradient(285deg,_rgba(214,230,254,.3)_0%,_rgba(214,252,254,0)_100%)] lg:flex lg:mx-6 lg:gap-8"
      >
        <div className="flex flex-col sm:flex-row lg:flex-col lg:items-start lg:justify-between sm:gap-10 sm:items-center mb-10">
          <Image
            src={"/assets/images/icon-eating.svg"}
            alt="eating image"
            width={64}
            height={64}
            className="mb-8 sm:mb-0"
          />
          <div>
            <h3 className="heading-md font-bold text-[var(--gun-metal)] mb-6">
              Healthy eating
            </h3>
            <p className="body-md text-[var(--dark-electric-blue)]">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col lg:items-start sm:gap-10 sm:items-center mb-10">
          <Image
            src={"/assets/images/icon-exercise.svg"}
            alt="eating image"
            width={64}
            height={64}
            className="mb-8 sm:mb-0"
          />
          <div>
            <h3 className="heading-md font-bold text-[var(--gun-metal)] mb-6">
              Regular exercise
            </h3>
            <p className="body-md text-[var(--dark-electric-blue)]">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col lg:items-start sm:gap-10 sm:items-center">
          <Image
            src={"/assets/images/icon-sleep.svg"}
            alt="eating image"
            width={64}
            height={64}
            className="mb-8 sm:mb-0"
          />
          <div>
            <h3 className="heading-md font-bold text-[var(--gun-metal)] mb-6">
              Adequate sleep
            </h3>
            <p className="body-md text-[var(--dark-electric-blue)]">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="bmi-limitations-title"
        aria-describedby="bmi-limitations-description"
        className="px-5 mt-[4.5rem] grid grid-cols-1 sm:grid-cols-2 sm:gap-[15px] sm:[&>.item:last-child]:col-span-2 sm:[&>.item:last-child]:w-1/2 sm:[&>.item:last-child]:mx-auto lg:[&>.item:last-child]:w-full lg:grid-cols-8 lg:grid-rows-3 lg:px-36"
      >
        <div className="sm:col-start-1 sm:col-span-2 lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-3">
          <h2
            id="bmi-limitations-title"
            className="text-3xl text-[var(--gun-metal)] font-semibold mb-8 text-center lg:text-left"
          >
            Limitations of BMI
          </h2>
          <p
            id="bmi-limitations-description"
            className="body-md text-[--dark-electric-blue] text-center lg:text-left mb-14"
          >
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="item mb-4 p-6 bg-[var(--pure-white)] rounded-2xl shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] lg:row-start-1 lg:row-span-1 lg:col-start-5 lg:col-span-3">
          <div className="flex items-center gap-4 mb-4 py-1">
            <Image
              src="assets/images/icon-gender.svg"
              width={32}
              height={32}
              alt="gender icon"
            />
            <h3 className="text-xl text-[var(--gun-metal)] font-semibold">
              Gender
            </h3>
          </div>
          <p className="body-md text-[var(--dark-electric-blue)]">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="item mb-4 p-6 bg-[var(--pure-white)] rounded-2xl shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] lg:row-start-2 lg:row-span-1 lg:col-start-3 lg:col-span-3">
          <div className="flex items-center gap-4 mb-4 py-1">
            <Image
              src="assets/images/icon-age.svg"
              width={32}
              height={32}
              alt="age icon"
            />
            <h3 className="text-xl text-[var(--gun-metal)] font-semibold">
              Age
            </h3>
          </div>
          <p className="body-md text-[var(--dark-electric-blue)]">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="item mb-4 p-6 bg-[var(--pure-white)] rounded-2xl shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] lg:row-start-2 lg:row-span-1 lg:col-start-6 lg:col-span-3">
          <div className="flex items-center gap-4 mb-4 py-1">
            <Image
              src="assets/images/icon-muscle.svg"
              width={32}
              height={32}
              alt="muscle icon"
            />
            <h3 className="text-xl text-[var(--gun-metal)] font-semibold">
              Muscle
            </h3>
          </div>
          <p className="body-md text-[var(--dark-electric-blue)]">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="item mb-4 p-6 bg-[var(--pure-white)] rounded-2xl shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] lg:row-start-3 lg:row-span-1 lg:col-start-2 lg:col-span-3">
          <div className="flex items-center gap-4 mb-4 py-1">
            <Image
              src="assets/images/icon-pregnancy.svg"
              width={32}
              height={32}
              alt="pregnancy icon"
            />
            <h3 className="text-xl text-[var(--gun-metal)] font-semibold">
              Pregnancy
            </h3>
          </div>
          <p className="body-md text-[var(--dark-electric-blue)]">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className="item mb-4 p-6 bg-[var(--pure-white)] rounded-2xl shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] lg:row-start-3 lg:row-span-1 lg:col-start-5 lg:!col-span-3 ">
          <div className="flex items-center gap-4 mb-4 py-1">
            <Image
              src="assets/images/icon-race.svg"
              width={32}
              height={32}
              alt="race icon"
            />
            <h3 className="text-xl text-[var(--gun-metal)] font-semibold">
              Race
            </h3>
          </div>
          <p className="body-md text-[var(--dark-electric-blue)]">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </section>
    </>
  );
}
