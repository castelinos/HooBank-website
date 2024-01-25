import { stats } from "../constants";
import styles from "../style";

function Stats() {
  return (
    <section
      className={` ${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className="flex-1 flex justify-start items-center flex-row m-3"
          >
            <h4 className="font-poppins font-semibold text-white text-[30px] xs:text-[45px] xs:leading-[53px] leading-[43px]">
              {" "}
              {stat.value}{" "}
            </h4>
            <p className="font-poppins font-normal text-gradient text-[15px] xs:text-[20px] xs:leading-[26px] leading-[21px] uppercase ml-3">
              {" "}
              {stat.title}{" "}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Stats;
